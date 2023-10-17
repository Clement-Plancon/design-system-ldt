'use client'
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import DestructiveButton from "./components/DesctructiveButton/DestructiveButton";
import Tab from "./components/Tab/Tab";
import TabText from "./components/TabText/TabText";
import TextArea from "./components/TextArea/TextArea";

export default function Home() {
  return (
    <main >
      <h1>Composant - Button</h1>
      <Button buttonText='bouton primaire' buttonType='primary' ></Button>
      <Button buttonText='bouton secondaire' buttonType='secondary'></Button>
      <Button buttonText='bouton tertiaire borderless' buttonType='secondary' borderless={true}></Button>
      <Button buttonText='bouton tertiaire' buttonType='tertiary'></Button>
      <Button buttonText='bouton tertiaire borderless' buttonType='tertiary' borderless={true}></Button>
      <h1>Composant - Tab</h1>
      <Tab label='test'></Tab>
      <h1>Composant - TabText</h1>
      <TabText label="test"></TabText>
      <h1>Composant - Destructive-button</h1>
      <DestructiveButton buttonText="bouton primaire destructif" buttonType="primary"></DestructiveButton>
      <DestructiveButton buttonText="bouton primaire destructif" buttonType="secondary"></DestructiveButton>
      <DestructiveButton buttonText="bouton primaire destructif" buttonType="secondary" borderless={true}></DestructiveButton>
      <DestructiveButton buttonText="bouton primaire destructif" buttonType="tertiary"></DestructiveButton>
      <DestructiveButton buttonText="bouton primaire destructif" buttonType="tertiary" borderless={true}></DestructiveButton>
      <h1>Composant - Badge</h1>
      <Badge text="warning" badgeType="warning"></Badge>
      <Badge text="in-progress" badgeType="in-progress"></Badge>
      <Badge text="success" badgeType="success"></Badge>
      <Badge text="error" badgeType="error"></Badge>
      <Badge text="personnalized" badgeType="personnalized"></Badge>
      <h1>Composant - Checkbox</h1>
      <Checkbox label='checkbox'></Checkbox>
      <h1>Composant - TextArea</h1>
      <TextArea value="text area" onChange={function (value: string): void {
        throw new Error("Function not implemented.");
      }}></TextArea>
    </main>
  )
}
