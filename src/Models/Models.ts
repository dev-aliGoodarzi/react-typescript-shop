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
export type { I_Transition, I_PriceOptions, I_PropertyButtons };
