import React from 'react';


function Image(props) {
    const [profileImg, setProfileImg] = React.useState("female-upload.jpeg")

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                setProfileImg({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
        props.imageHandlers(e.target.files[0]);
    }

    // const { profileImg } = this.state;
    // console.log("profileImg", profileImg);
    return (
        <div className="imgcontainer">
            <img src={profileImg} alt="pic" id="file" width="203" name="file" height="150" />
            <input type="file" name="file" id="file" accept="image/*"
                onChange={imageHandler} />
            <p></p>
        </div>
    )

}

export default Image
