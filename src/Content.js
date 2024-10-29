import React, { useEffect, useState } from 'react';

const Content = () => {
    const [previewAvatar, setPreviewAvatar] = useState(null);

    const onChangeAvatar = (e) => {
        let file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setPreviewAvatar(file)
    }

    useEffect(() => {
        return () => {
            previewAvatar && URL.revokeObjectURL(previewAvatar.preview)
        };
    }, [previewAvatar]);

    return (
        <div>
            <input type="file" onChange={onChangeAvatar}/>
            {previewAvatar && <img src={previewAvatar.preview} alt="Avatar"/>}
        </div>
    )
}

export default Content;