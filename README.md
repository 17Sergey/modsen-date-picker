# Библиотека Modsen DatePicker

## Установка и использование

### Установка:
```
npm i @sergeykachaliuk/modsen-datepicker-library

yarn add @sergeykachaliuk/modsen-datepicker-library
```

### Использование:

DatePicker:

```
import { DatePicker } from '@sergeykachaliuk/modsen-datepicker-library';
import { useState } from 'react';

function App() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 15));

    const handleSelectDate = (date: Date) => {
        setCurrentDate(date);
    };

    return (
        <>
            <div>
                {currentDate.getDay()}/{currentDate.getMonth() + 1}/{currentDate.getFullYear()}
            </div>
            <DatePicker
                dateSelected={currentDate}
                onDateSelect={handleSelectDate}
            />
        </>
    );
}

export default App;
```

DateRangePicker:

```
import { DateRangePicker } from '@sergeykachaliuk/modsen-datepicker-library';
import { useState } from 'react';

function App() {
    const [startRange, setStartRange] = useState(new Date(2025, 1, 15));
    const [endRange, setEndRange] = useState(new Date(2025, 1, 17));

    const handleSelectStartDate = (date: Date) => {
        setStartRange(date);
    };

    const handleSelectEndDate = (date: Date) => {
        setEndRange(date);
    };

    return (
        <>
            <div>
                {startRange.getDay()}/{startRange.getMonth() + 1}/{startRange.getFullYear()}
                {endRange.getDay()}/{endRange.getMonth() + 1}/{endRange.getFullYear()}
                <DateRangePicker
                    onRangeStartSelect={handleSelectStartDate}
                    onRangeEndSelect={handleSelectEndDate}
                />
            </div>
        </>
    );
}

export default App;
```





#### Функционал:

- Просмотр календаря;
- Выбор диапазона для календаря;
- Дефолтный календарь с заранее установленным диапазоном;
- Возможность выбора начала недели(с понедельника или воскресенья);
- Выбор вида календаря (по неделям, месяцам и т.д.);
- Реализовать возможность при клике на определенный день добавлять список задач и
  сохранять их в localStorage;
- Возможность переключения на предыдущий(ую)/следующий(ую) неделю/месяц/год;
- Возможность выбора максимальной даты календаря;
- Возможность выбора минимальной даты для календаря;
- Возможность скрывать/показывать выходные дни и выделять праздничные дни другим цветом;
- Возможность перейти в календаре на введенную пользователем дату;
- Возможность прокидывать определенную дату для установки даты и наоборот, использовать в приложении дату, которую ввел пользователь;
- Стилизация календаря.

