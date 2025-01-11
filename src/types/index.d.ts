type Day = number;
type WeekDay = string;
type MonthWord = string;
type Year = number;

interface Holiday {
  name: string;
  description?: string;
  date: Date;
}

interface Todo {
  id: number;
  text: string;
  date: string;
}
