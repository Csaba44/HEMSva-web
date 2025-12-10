type AnnouncementParams = {
  date: string;
  author: string;
  content: string;
  lastOne?: boolean;
};

function Announcement({ date, author, content, lastOne = false }: AnnouncementParams) {
  return (
    <div className="flex flex-col items-center text-left ">
      <div className="flex flex-col justify-start gap-1">
        <p className="text-darkest text-sm">
          {date} -- {author}
        </p>
        <p>{content}</p>
      </div>
      {!lastOne && <div className="my-3 w-60 h-[2px] bg-lightgray"></div>}
    </div>
  );
}

export default Announcement;
