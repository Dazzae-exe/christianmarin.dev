const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
})

export const formatDate = (value: string) => dateFormatter.format(new Date(value))
