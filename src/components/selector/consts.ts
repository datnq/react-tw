import { DateFormats } from './types'

export const dateFormats: DateFormats = {
  long: {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  },
  short: {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
}

export const formatDate = (
  date: Date,
  locale: string,
  format: Intl.DateTimeFormatOptions = dateFormats.long
): string => {
  return new Intl.DateTimeFormat(locale, format).format(date)
}
