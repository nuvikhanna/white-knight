import { useQuery } from "@tanstack/react-query";
import { sanityClient, homepageQuery, type HomepageContent } from "@/lib/sanity";

export const useHomepage = () =>
  useQuery<HomepageContent | null>({
    queryKey: ["homepage"],
    queryFn: () => sanityClient.fetch(homepageQuery),
  });
