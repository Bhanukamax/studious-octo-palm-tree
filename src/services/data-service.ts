import { Category } from 'types/types';
import { data } from '../data/response';

class DataService {
  public async getCategories(): Promise<Category[]> {
    return data.categories;
  }
}

export default DataService;
