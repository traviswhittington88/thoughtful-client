function getJournalName(entry, journals) {
  const journal_id = entry.journal_id
  const journal = journals.filter(journal => journal.id === journal_id)
  const journal_name = journal[0].name 
  return journal_name
}

//For development purposes only
/*function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c==='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
} */ 

export { 
  getJournalName,
}