// db
import Dexie from 'dexie'

// datetime
import dayjs from 'dayjs'

const db = new Dexie('TABL')

const blankThought = {
    datetime: dayjs(),
    background: '',
    antecedent: '',
    thought: '',
    response: '',
    belief: 50, 
    support: '',
    distortions: [],
    refute: '',
    replacement: '',
    replacement_belief: 100,
    holdback: ''
}

db.version(1).stores({
    thoughts: "++id, datetime, background, antecedent, thought, response, belief, support, distortions, refute, replacement, replacement_belief, holdback",
    behavior: "++id, datetime, background, antecedent, behavior, results"
})

export default db
export {
    blankThought
}