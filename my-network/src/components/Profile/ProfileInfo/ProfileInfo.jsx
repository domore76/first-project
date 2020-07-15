import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.img} src="https://cdn23.img.ria.ru/images/151794/84/1517948413_0:101:2000:1226_600x0_80_0_0_13a24db3bab95e4e26f9f0687761a978.jpg" />
      </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
  );
};

export default ProfileInfo;
