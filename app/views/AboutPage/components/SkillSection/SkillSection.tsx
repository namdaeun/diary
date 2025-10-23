import Tag from '~/components/tags/Tag';
import { SKILLS } from '~/constants/skills';
import * as s from './styles.css';

const SkillSection = () => {
  return (
    <section className={s.wrapper}>
      <Tag>Skills</Tag>
      <p className={s.description}>머시기 머시기 프로젝트들입니다.</p>
      <ul className={s.skillList}>
        {SKILLS.map((skill) => {
          return (
            <li className={s.skillItem} key={skill.id}>
              {/* <img
                // src={skill.img}
                alt={skill.name}
                className={s.skillItemImg}
              /> */}
              <div className={s.skillItemName}>{skill.name}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SkillSection;
