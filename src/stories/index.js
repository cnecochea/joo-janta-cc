import React from 'react';

import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { JSXAddon } from 'storybook-addon-jsx';

import { Welcome } from '@storybook/react/demo';

import Button from '../components/Button';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';
import CheckboxGroup from '../components/CheckboxGroup';
import DataTable from '../components/DataTable';
import { FlexWrapper, P, A, Icon, Tr, Th, Td } from '../components/Elements';
// import Heading from '../components/Heading';
import LabeledControl from '../components/LabeledControl';
// import Layout from '../components/Layout';
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


storiesOf('Welcome', module).addWithJSX('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addWithJSX('standalone', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .addWithJSX('in a row', () => (
    <>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </>
  ));

storiesOf('Card', module)
  .addWithJSX('normal usage', () => <Card>Ahoy there</Card>)
  .addWithJSX('in a grid', () => <CardGrid><Card>Ahoy there</Card><Card>Good day to you</Card></CardGrid>);

storiesOf('CheckboxGroup', module)
  .addWithJSX('normal usage', () => (
    <CheckboxGroup
      id="doh"
      legend="Choose all that apply"
      options={['Time', 'Cost', 'Quality']}
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
  ))
  .addWithJSX('Icons', () => (
    <>
      <Icon></Icon> These really should be SVGs. In progress.
    </>
));
  
  storiesOf('FlexWrapper', module)
    .addWithJSX('Justify between', () => (
      <>
        <FlexWrapper justify="space-between">
          <span>Start</span>
          <span>End</span>
        </FlexWrapper>
      </>
    ))
    .addWithJSX('Justify at end', () => (
      <>
        <FlexWrapper justify="flex-end">
          <span>Start</span>
          <span>End</span>
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
  .addWithJSX('textarea', () => (
    <LabeledControl
      id="bear"
      type="textarea"
      label="Would you like to elaborate?"
      value="Useful for when you need multiline text"
    />
  ));


storiesOf('RadioGroup', module)
  .addWithJSX('normal usage', () => (
    <RadioGroup
      id="gah"
      legend="Choose one"
      options={['Flight', 'Invisibility', 'Telekinesis']}
    />
  ));