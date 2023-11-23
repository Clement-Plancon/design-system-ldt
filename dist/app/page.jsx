'use client';
import React from "react";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import DestructiveButton from "./components/DestructiveButton/DestructiveButton";
import Tab, { TabGroup } from "./components/Tab/Tab";
import TabText from "./components/TabText/TabText";
import TextArea from "./components/TextArea/TextArea";
import Toast from "./components/Toast/Toast";
import InputField from "./components/InputField/InputField";
import InputDropdown from "./components/InputDropdown/InputDropdown";
import Chip, { RadioGroup } from "./components/Chip/Chip";
import Filter from "./components/Filter/Filter";
export default function Home() {
    return (<main>
      <h1>Composant - Button</h1>
      <Button buttonText='bouton primaire' buttonType='primary'></Button>
      <Button buttonText='bouton secondaire' buttonType='secondary'></Button>
      <Button buttonText='bouton tertiaire borderless' buttonType='secondary' borderless={true}></Button>
      <Button buttonText='bouton tertiaire' buttonType='tertiary'></Button>
      <Button buttonText='bouton tertiaire borderless' buttonType='tertiary' borderless={true}></Button>
      <h1>Composant - Tab</h1>
      <TabGroup defaultActive="Tab1">
        <Tab label="Tab1"/>
        <Tab label="Tab2"/>
        <Tab label="Tab3"/>
      </TabGroup>
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
      <TextArea value="text area" onChange={(event) => {
            const nouveauTexte = event;
        }}/>

      <TextArea value="text area" error={true} onChange={(event) => {
            const nouveauTexte = event;
        }}/>
      <h1>Composant - Toast</h1>
      <Toast messageAction="Action" message="test" type="success"></Toast>
      <Toast messageAction="Action" message="test" type="error"></Toast>
      <Toast messageAction="Action" message="test" type="warning"></Toast>
      <Toast messageAction="Action" message="test" type="info"></Toast>
      <Toast messageAction="Action" message="test" type="misc"></Toast>
      <h1>Composant - Input field</h1>

      <InputField placeholder="je cherche" value="taper votre texte ici" onChange={(event) => {
            const nouveauTexte = event;
        }}></InputField>
      <InputField placeholder="je cherche" value="taper votre texte ici" error={true} onChange={(event) => {
            const nouveauTexte = event;
        }}></InputField>
      <InputField placeholder="je cherche" value="taper votre texte ici" disabled={true} onChange={(event) => {
            const nouveauTexte = event;
        }}></InputField>

      <h1>Composant - Input Dropdown</h1>
      <InputDropdown placeholder="je cherche" value="taper votre texte" onChange={(event) => {
            const nouveauTexte = event;
        }}>
        <Chip type="checkbox" label="Check me" id="check1" name="check1"/>
      </InputDropdown>
      <InputDropdown error={true} placeholder="je cherche" value="taper votre texte" onChange={(event) => {
            const nouveauTexte = event;
        }}>
        <RadioGroup>
          <Chip type="radio" label="Option 1" id="option1" name="group1"/>
          <Chip type="radio" label="Option 2" id="option2" name="group1"/>
          <Chip type="radio" label="Option 3" id="option3" name="group1"/>
        </RadioGroup>

      </InputDropdown>
      <InputDropdown disabled placeholder="je cherche" value="taper votre texte" onChange={(event) => {
            const nouveauTexte = event;
        }}></InputDropdown>

      <h1>Composant - Chip</h1>
      <RadioGroup>
        <Chip type="radio" label="Option 1" id="option1" name="group1"/>
        <Chip type="radio" label="Option 2" id="option2" name="group1"/>
        <Chip type="radio" label="Option 3" id="option3" name="group1"/>
      </RadioGroup>
      <Chip type="checkbox" label="Check me" id="check1" name="check1"/>
      <h1>Composant - Filter</h1>
      <Filter label="dropdown" options={[<Chip type="checkbox" label="Check me" id="check1" name="check1"/>
        ]}></Filter>
    </main>);
}
