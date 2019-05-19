import 'datalist-polyfill';
import React from 'react';

import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { JSXAddon } from 'storybook-addon-jsx';
import { themes } from '../shared/Themes';

import { Welcome } from '@storybook/react/demo';

import Button from '../components/Button';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';
import CheckboxGroup from '../components/CheckboxGroup';
import DataTable from '../components/DataTable';
import { FlexWrapper, P, A, Icon, Tr, Th, Td } from '../components/Elements';
import Heading from '../components/Heading';
import LabeledControl from '../components/LabeledControl';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import RadioGroup from '../components/RadioGroup';
import Tooltip from '../components/Tooltip';

setAddon(JSXAddon);

const Test = ({
  fontSize = '16px',
  fontFamily = 'Arial',
  align = 'left',
  color = 'red',
  children
}) => (
  <div style={{ color, fontFamily, fontSize, textAlign: align }}>
    {children}
  </div>
);

storiesOf('Button', module)
  .addWithJSX('standalone', () => <Button onClick={action('clicked')}>Default button</Button>)
  .addWithJSX('primary action', () => <Button onClick={action('clicked')} use="primary">Primary action</Button>)
  .addWithJSX('in a row', () => (
    <>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </>
  ));

storiesOf('Card', module)
  .addWithJSX('normal usage', () => <Card>Ahoy there</Card>)
  .addWithJSX('in a grid', () => (
    <CardGrid>
      <Card>Ahoy there</Card>
      <Card>Good day to you</Card>
      <Card>I said: Good day.</Card>
      <Card>I said: Good day.</Card>
      <Card>I said: Good day.</Card>
    </CardGrid>
  ));

storiesOf('CheckboxGroup', module)
  .addWithJSX('normal usage', () => (
    <CheckboxGroup
      id="doh"
      legend="Choose all that apply"
      options={['Time', 'Cost', 'Quality']}
      options={[
        { text: <>Time <sup>⌛</sup></>, value: 'time' },
        { text: <>Cost <sup>💰</sup></>, value: 'cost' },
        { text: 'Quality', value: 'quality' },
      ]}
    />
  ));

storiesOf('DataTable', module)
  .addWithJSX('normal usage', () =>(
    <DataTable>
      <thead>
        <Tr>
          <Th><Tooltip align="right" showIndicator={true} text="Moniker">Name</Tooltip></Th>
          <Th><Tooltip align="left" showIndicator={true} text="Talky-talk machine">Phone</Tooltip></Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td>Miles Morales</Td>
          <Td>800-839-3939</Td>
        </Tr>
        <Tr>
          <Td>Aaron Davis</Td>
          <Td>212-839-3939</Td>
        </Tr>
        <Tr>
          <Td>Gwen Stacy</Td>
          <Td>618-839-3939</Td>
        </Tr>
      </tbody>
    </DataTable>
  ));

storiesOf('Elements', module)
  .addWithJSX('Headings', () => (
    <>
      { ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((item, index) => {
        return (
          <Heading as={item}>Heading {index + 1}</Heading>
        );
      }) }
    </>
  ))
  .addWithJSX('Paragraph', () => (
    <>
    <P>There's nothing too fancy about these. They're the foundation of basic typographical styles.</P>
    <P>But they do have opinions about separation between themselves.</P>
    </>
  ))
  .addWithJSX('Links', () => (
    <>
      <A href="#">Hyperlink styling</A>
    </>
  ));
  
  storiesOf('FlexWrapper', module)
    .addWithJSX('Justify between', () => (
      <>
        <FlexWrapper justify="space-between">
          <span style={{ outline: '1px dotted', height: 50 }}>Start</span>
          <span style={{ outline: '1px dotted', height: 50 }}>End</span>
        </FlexWrapper>
      </>
    ))
    .addWithJSX('Justify at end', () => (
      <>
        <FlexWrapper justify="flex-end">
          <span style={{ outline: '1px dotted', height: 50 }}>Start</span>
          <span style={{ outline: '1px dotted', height: 50 }}>End</span>
        </FlexWrapper>
      </>
    ))
    .addWithJSX('Vertically align center', () => (
      <>
        <FlexWrapper align="center">
          <span style={{ outline: '1px dotted', height: 100 }}>Start</span>
          <span style={{ outline: '1px dotted', height: 50 }}>End</span>
        </FlexWrapper>
      </>
    ))
    .addWithJSX('Vertically align bottom', () => (
      <>
        <FlexWrapper align="flex-end">
          <span style={{ outline: '1px dotted', height: 100 }}>Start</span>
          <span style={{ outline: '1px dotted', height: 50 }}>End</span>
        </FlexWrapper>
      </>
    ));

storiesOf('Form fields', module)
  .addWithJSX('required text field', () => (
    <LabeledControl
      id="foo"
      label="Nom de plume"
      required={true}
    />
  ))
  .addWithJSX('text field with description', () => (
    <LabeledControl
      id="bar"
      label={
        <Tooltip
          align="right"
          showIndicator
          text="What other people might call you"
        >
          Nom de guerre
        </Tooltip>
      }
      description="What shouldn't we call you?"
      defaultValue="Hacksaw"
    />
  ))

  .addWithJSX('autocomplete', () => (
    <LabeledControl
      autocomplete="off"
      id="lizst"
      label="Type ahead"
      list="franz"
      Slot={
        <datalist id="franz">
          <option value="Abacus" />
          <option value="Dennis" />
          <option value="Ferdinand" />
          <option value="Zeppelin" />
        </datalist>
      }
    />
  ))

  .addWithJSX('textarea', () => (
    <LabeledControl
      id="bear"
      type="textarea"
      label="Would you like to elaborate?"
      value="Useful for when you need multiline text"
    />
  ));

storiesOf('Layouts', module)
  .addWithJSX('Page layout', () => (
    <Layout
      asideContent={<div>foo</div>}
      notificationContent={<div>bar</div>}
      sideContent={<div>bear</div>}
      topContent={<div>boar</div>}
      footerContent={<div>gah</div>}
    >
      Ahoy
    </Layout>
  ))

storiesOf('Modal', module)
  .addWithJSX('normal usage', () => (
    <>
      <Modal show={true}>
        Ahoy there
      </Modal>
    </>
  ))
  .addWithJSX('with header', () => (
    <>
      <Modal
        show={true}
        titleText={
          <Heading as="h2" spacing="0">Optional title</Heading>
        }
      >
        Ahoy there
      </Modal>
    </>
  ))
  .addWithJSX('with footer', () => (
    <>
      <Modal
        show={true}
        footerContent={
          <>
            <Button use="primary">Save</Button>
            <Button>Cancel</Button>
          </>
        }
      >
        Ahoy there
      </Modal>
    </>
  ))
  .addWithJSX('with header & footer', () => (
    <>
      <Modal
        show={true}
        footerContent={
          <>
            <Button use="primary">Save</Button>
            <Button>Cancel</Button>
          </>
        }
        titleText={
          <Heading as="h2" spacing="0">Optional title</Heading>
        }
      >
        Ahoy there
      </Modal>
    </>
  ));

storiesOf('RadioGroup', module)
  .addWithJSX('normal usage', () => (
    <RadioGroup
      id="gah"
      legend="Choose one"
      options={[
        { text: 'Flight', value: 'flight' },
        { text: 'Invisibility', value: 'invisibility' },
        { text: <>Telekinesis <s>ooooo</s></>, value: 'telekinesis', tooltip: 'Spooky' },
      ]}
    />
  ));