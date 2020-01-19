function getJournalName(entry, journals) {
  const journal_id = entry.journal_id
  const journal = journals.filter(journal => journal.id === journal_id)
  const journal_name = journal[0].name 
  return journal_name
}

export { getJournalName }