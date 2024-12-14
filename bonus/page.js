import Image from 'next/image'
export default function Bonus(){
    return (
        <>
        <Image src='https://firebasestorage.googleapis.com/v0/b/storage1-15612.appspot.com/o/ICTBuilding.png?alt=media&token=a2e64f54-b92f-4c18-b45a-e743b1fa28f2'></Image>
        {users.map(prop =>(
            <>
                <h1>{prop.type}</h1>
                <h1>{prop.question}</h1>
            </>
        ))}
        </>
    )
}

const users = [
    {
        type: 0,
        question: 'What is the value of the 3rd term of the following sum to find the determinant of the following matrix?',
        answer: [20],
        score: 4,
        options: ['']
    },
    {
        type: 1,
        question: 'Which intervals of x should contain a root of a function f(x) = x^3 - 6x^2 + 4x + 12?',
        answer: [2],
        score: 1,
        options: ['[-1,1]', '[1.5, 2]', '[-1.5, -1]', '[2,2.5]']
    },
    {
        type: 2,
        question: 'You are a good student?',
        answer: [1],
        score: 1,
        options: ['']
    },
    {
        type: 3,
        question: 'Who is the instructor of this subject?',
        answer: [3],
        score: 1,
        options: ['Aj. Preecha', 'Aj. Snit', 'Aj, Petre', 'Aj. Peter', 'Aj. Petch']
    },
    {
        type: 4,
        question: 'What is this subject outcomes?',
        answer: [0, 1, 4],
        score: 1,
        options: ['to know things', 'to learn things', 'to have fun', 'to be a normal human', 'to hide your hidden inventory']
    }
]