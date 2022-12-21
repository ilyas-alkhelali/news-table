interface useGetTotalPagesCountProps {
  totalResults: number | undefined;
  limit: number;
}
interface useGetPageNumbersProps {
  totalPages: number | undefined;
}

export const useGetPageNumbers = ({ totalPages }: useGetPageNumbersProps) => {
  let pages = [];
  if (totalPages !== undefined) {
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
  }
  return { pages };
};
export const useGetTotalPagesCount = ({
  totalResults,
  limit,
}: useGetTotalPagesCountProps) => {
  if (totalResults !== undefined) {
    return Math.ceil(totalResults / limit);
  }
};
