import Dexie from 'dexie'

const db = new Dexie('TABL')

db.version(1).stores({
    thoughts: "++id, datetime, background, antecedent, thought, response, belief, support, distortions, refute, replacement, replacement_belief, holdback",
    behavior: "++id, datetime, background, antecedent, behavior, results"
})

export default db