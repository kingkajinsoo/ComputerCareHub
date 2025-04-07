import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Portfolio related functions
export const portfolioService = {
  getPortfolioItems: async () => {
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },
  
  getPortfolioItemById: async (id: number) => {
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
  
  getPortfolioItemsByCategory: async (category: string) => {
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};

// Reviews related functions
export const reviewsService = {
  getReviews: async (page: number = 1, perPage: number = 9) => {
    // Calculate start and end indexes for pagination
    const start = (page - 1) * perPage;
    const end = start + perPage - 1;
    
    // Get paginated reviews
    const { data, error, count } = await supabase
      .from('reviews')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(start, end);
    
    if (error) throw error;
    return { reviews: data, total: count };
  },
  
  submitReview: async (reviewData: any) => {
    const { data, error } = await supabase
      .from('reviews')
      .insert([reviewData]);
    
    if (error) throw error;
    return data;
  }
};

// Contact/Inquiry related functions
export const contactService = {
  submitInquiry: async (inquiryData: any) => {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([inquiryData]);
    
    if (error) throw error;
    return data;
  },
  
  getInquiries: async () => {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};

// Services related functions
export const servicesService = {
  getServices: async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return data;
  },
  
  getServiceById: async (id: number) => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }
};

export default supabase;
