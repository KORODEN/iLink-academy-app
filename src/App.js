import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {PersonInfo} from "./context/PersonInfo";
import {ReviewsInfo} from "./context/ReviewsInfo";
import Modal from "./components/Modal/Modal";
import {useState} from "react";

function App() {
    const person = {
        name: 'Денис',
        lastName: 'Корогодин',
        gender: 'мужчина',
        birthDate: '06.04.2000',
        currentCity: 'Томск',
        imageUrl: 'iLink-academy-app/profilesImages/profile-img.jpg',
        description: `В данный момент преподаю 
            программирование для детей. В прошлом году 
            закончил НИ ТПУ по направлению "Информатика и 
            вычислительная техника", после чего решил заняться 
            веб-разработкой.`,
        pets: 'Нет'
    }

    const reviews = [
        {
            person: {
                name: 'Буба',
                lastName: 'Бубенцов',
                imageUrl: 'iLink-academy-app/profilesImages/otherProfiles/profile1.png'
            },
            commentDate: '08.01.2022',
            comment: `Отличный коллектив, руководители 
            понимают сам процесс работы каждого сотрудника 
            и помогают всем без исключения. Система KPI 
            позволяет реально хорошо зарабатывать по простому 
            принципу - чем больше и лучше ты работаешь, тем 
            больше денег получаешь. Соцпакет - отличная страховка 
            ДМС, организовали курсы английского языка бесплатно, 
            оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.`
        },
        {
            person: {
                name: 'Илья',
                lastName: 'Анташкевич',
                imageUrl: ''
            },
            commentDate: '08.01.2022',
            comment: `Год назад попытал счастье, откликнулся на вакансию, 
            прошел собес и попал в компанию. Долго переживал что будет 
            тяжело влиться, но тут прям классные ребята работают, все 
            на одной волне. Всегда готовы помочь с любым вопросом. 
            Для эффективной работы здесь нужно хорошо знать иностранные языки.`
        },
        {
            person: {
                name: 'Юрина',
                lastName: 'Маргарита',
                imageUrl: 'iLink-academy-app/profilesImages/otherProfiles/profile2.png'
            },
            commentDate: '26.12.2021',
            comment: `Наша компания благодарна фирме ilink за сотрудничество. 
            Хотелось бы отметить отличную работу сотрудников: все было выполнено 
            качественно, со знанием дела, в установленные сроки. За время работы 
            с компанией значительно увеличилась аудитория, сайт приносит стабильный 
            доход, контент уникальный, грамотный и качественный. Будет продолжать 
            работу и дальше. Мы довольны, что доверили создание сайта компании ilink.`
        },
        {
            person: {
                name: 'Дмитрий',
                lastName: 'Иванов',
                imageUrl: 'iLink-academy-app/profilesImages/otherProfiles/profile3.png'
            },
            commentDate: '16.12.2021',
            comment: `Отвечал за найм и адаптацию сотрудников в компании, за 
            поддержание на нужном уровне HR-бренда и трудового настроя коллектива. 
            В компанию пришёл без опыта работы HR-ом. Всему научился здесь. 
            Как теории, так и практике. Набрал опыт достаточно быстро. Есть 
            программа обучения, поощряются различные курсы, и это большой плюс. 
            В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.`
        }
    ]

    const [modal, setModal] = useState(false)
    return (
        <div className="App">
            <Header person={person}/>
            <PersonInfo.Provider value={{person}}>
                <ReviewsInfo.Provider value={{reviews}}>
                    <Main setVisible={setModal}/>
                </ReviewsInfo.Provider>
            </PersonInfo.Provider>
            <Footer/>
            <Modal visible={modal} setVisible={setModal}/>
        </div>
    );
}

export default App;
