const students = [
  { name: 'Ivan', age: 30, groupId: 1 },
  { name: 'Ilya', age: 30, groupId: 1 },
  { name: 'Vlad', age: 30, groupId: 1 },
  { name: 'Ars', age: 31, groupId: 2 },
  { name: 'Paul', age: 32, groupId: 2 },
  { name: 'Egor', age: 31, groupId: 2 },
  { name: 'Raf', age: 33, groupId: 2 },
]

const groupOnlyMatureStudentsByGroup = (students) => {
    const new_dict = {}
    const res = students.filter((s) => {
        return s.age > 30
    })

    for (let s of res) {
        const groupId = s.groupId
        const name = s.name

        if (!new_dict[groupId]) {
            new_dict[groupId] = []
        }

        new_dict[groupId].push(name)
    }

    return new_dict
}

console.log(
  groupOnlyMatureStudentsByGroup(students)
)


function groupStudentsByAge(students) {
  const group = {}
  students.forEach(st => {
    if (!group[st.age]) {
      group[st.age] = [st]
    } else {
      group[st.age].push(st)
    }
  }) 
  
  return group
}

console.log(groupStudentsByAge(students));