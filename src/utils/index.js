//кастомная функция для определения возраста человека по дате рождения
export function getAge(birthDate) {
    let dateArray = birthDate.split('.')
    let now = new Date().toLocaleString().split(', ')[0].split('.')
    let age = Number(now[2])-Number(dateArray[2])

    if(Number(dateArray[1]) >= Number(now[1])) {
        if(Number(dateArray[1]) > Number(now[1])) {
            age--
        } else if(Number(dateArray[0]) > Number(now[0])) {
            age--
        }
    }

    return age
}