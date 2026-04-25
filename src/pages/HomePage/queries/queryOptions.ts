import { http } from '@/utils/http';
import { queryOptions } from '@tanstack/react-query';

interface MeResponse {
  point: number;
  grade: 'EXPLORER' | 'PILOT' | 'COMMANDER';
}
export const meOptions = () =>
  queryOptions({
    queryKey: ['me'],
    queryFn: () => http.get<MeResponse>('/api/me'),
  });

interface GradePointResponse {
  gradePointList: Array<{
    type: 'EXPLORER' | 'PILOT' | 'COMMANDER';
    minPoint: number;
  }>;
}
export const gradePointOptions = () =>
  queryOptions({
    queryKey: ['grade', 'point'],
    queryFn: () => http.get<GradePointResponse>('/api/grade/point'),
  });

export interface RecentProduct {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
}
interface RecentProductListResponse {
  recentProducts: RecentProduct[];
}
export const recentProductListOptions = () =>
  queryOptions({
    queryKey: ['recent', 'product', 'list'],
    queryFn: () => http.get<RecentProductListResponse>('/api/recent/product/list'),
    select: res => {
      return res.recentProducts;
    },
  });
