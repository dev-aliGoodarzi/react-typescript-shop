interface I_Transition {
  value: string;
  id: string;
  valueForShow: string;
}

interface I_PriceOptions {
  value: number;
  id: string;
  valueForShow: string;
}

interface I_PropertyButtons {
  label: string;
  isSelected: boolean;
}

interface I_CheckBoxes {
  label: string;
  name: string;
  isChecked: boolean;
}

interface I_Home {
  id: string;
  name: string;
  price: number;
  address: string;
  yearOld: string;
  image: string;
  whenUploaded: string;
  options: string[];
}

interface I_HeaderLinks {
  to: string;
  nameForDisplay: string;
  isSelected: boolean;
}
export type {
  I_Transition,
  I_PriceOptions,
  I_PropertyButtons,
  I_CheckBoxes,
  I_Home,
  I_HeaderLinks,
};
