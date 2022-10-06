type StrOrNull = string | null;
type NumOrNull = number | null;
type StrObject = {
  [key: string]: string;
};

export interface WantedPersonData {
  title: string;
  reward_text: StrOrNull;
  aliases: string[] | null;
  publication: StrOrNull;
  url: StrOrNull;
  warning_message: StrOrNull;
  age_max: StrOrNull;
  additional_information: StrOrNull;
  weight_min: NumOrNull;
  height_min: NumOrNull;
  field_offices: string[] | null;
  age_min: NumOrNull;
  occupations: StrOrNull;
  height_max: NumOrNull;
  [key: string]: string | string[] | number | StrObject | null;
}

export interface FbiWantedList {
  total: number;
  page: number;
  items: WantedPersonData[];
}
