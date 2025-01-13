import { useState, useEffect } from "react";

export const useRangeSelection = (
  rangeStart: Date | null,
  rangeEnd: Date | null,
  onRangeStartSelect: DateCallback,
  onRangeEndSelect: DateCallback,
) => {
  const [startRange, setStartRange] = useState<Date | null>(rangeStart);
  const [endRange, setEndRange] = useState<Date | null>(rangeEnd);

  const handleRangeSelect = (date: Date) => {
    if (!startRange) {
      setStartRange(date);
      onRangeStartSelect(date);
    }

    if (startRange && !endRange) {
      if (date < startRange) {
        setEndRange(startRange);
        setStartRange(date);

        onRangeStartSelect(date);
        onRangeEndSelect(startRange);
      } else {
        setEndRange(date);

        onRangeEndSelect(date);
      }
    }

    if (startRange && endRange) {
      setStartRange(date);
      setEndRange(null);

      onRangeStartSelect(date);
    }
  };

  const handleStartRangeSelect = (date: Date) => {
    setStartRange(date);
  };

  const handleEndRangeSelect = (date: Date) => {
    setEndRange(date);
  };

  const handleRangesClear = () => {
    setStartRange(null);
    setEndRange(null);
  };

  const handleStartRangeClear = () => {
    setStartRange(null);
  };

  const handleEndRangeClear = () => {
    setEndRange(null);
  };

  useEffect(() => {
    setStartRange(rangeStart);
  }, [rangeStart]);

  useEffect(() => {
    setEndRange(rangeEnd);
  }, [rangeEnd]);

  return {
    startRange,
    endRange,
    handleRangeSelect,
    handleStartRangeSelect,
    handleEndRangeSelect,
    handleStartRangeClear,
    handleEndRangeClear,
    handleRangesClear,
  };
};
