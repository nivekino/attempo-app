import { Skeleton } from "@mui/material";

const SkeletonCard: React.FC = () => {
  return (
    <div className="p-4 w-[260px] md:w-[230px] lg:w-[300px]">
      <Skeleton variant="rectangular" height={400} />
    </div>
  );
};

export default SkeletonCard;
