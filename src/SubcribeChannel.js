import React, {useEffect, useState} from 'react';

let DUMMY_DATA = [
    {
        id: 1,
        name: "UseEffect Cơ bản",
        description: "Giải thích chi tiết về useEffect"
    },
    {
        id: 2,
        name: "UseState và cách sử dụng",
        description: "UseState là gì và cách hoạt động"
    },
    {
        id: 3,
        name: "JSX là gì?",
        description: "Đố ông biết đấy"
    },
]

const SubscribeChannel = () => {
    const [selectedId, setSelectedId] = useState(1);

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${selectedId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${selectedId}`, handleComment);
        }
    }, [selectedId]);

    return (
        <div>
            {DUMMY_DATA.map(lesson => {
                return (
                    <div
                        key={lesson.id}
                        onClick={() => {
                            setSelectedId(lesson.id);
                        }}
                    >
                        <h1 style={selectedId === lesson.id ? {color: "red"} : {}}>{lesson.name}</h1>
                        <p style={selectedId === lesson.id ? {color: "red"} : {}}>{lesson.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default SubscribeChannel;