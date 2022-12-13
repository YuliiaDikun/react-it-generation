import { formatDate } from 'service/formatDate';
export const BlogCard = ({
  data: { poster, tag, title, description, name, avatar, postedAt },
}) => {
  return (
    <div>
      <img src={poster} alt="" />
      <div>
        <p>{tag}</p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div>
        <img src={avatar} alt="" />
        <div>
          <p>{name}</p>
          <p>{formatDate(postedAt)}</p>
        </div>
      </div>
    </div>
  );
};
