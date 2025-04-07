import { useState, useEffect } from 'react';
import supabase from '../services/supabase';

/**
 * Hook for fetching data from Supabase with loading, error handling, and pagination
 * 
 * @param tableName - The name of the Supabase table to query
 * @param options - Query options including pagination, filters, etc.
 * @returns Object containing data, loading state, error, and utility functions
 */
export const useSupabaseQuery = <T>(
  tableName: string,
  options: {
    columns?: string;
    page?: number;
    pageSize?: number;
    filters?: Record<string, any>;
    orderBy?: { column: string; ascending?: boolean };
    initialData?: T[];
  } = {}
) => {
  const {
    columns = '*',
    page = 1,
    pageSize = 10,
    filters = {},
    orderBy = { column: 'created_at', ascending: false },
    initialData = []
  } = options;

  const [data, setData] = useState<T[]>(initialData);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Refetch data when parameters change
  useEffect(() => {
    fetchData();
  }, [tableName, columns, page, pageSize, JSON.stringify(filters), JSON.stringify(orderBy)]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Calculate start and end for pagination
      const start = (page - 1) * pageSize;
      const end = start + pageSize - 1;

      // Start building the query
      let query = supabase
        .from(tableName)
        .select(columns, { count: 'exact' });

      // Apply filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && 'operator' in value && 'value' in value) {
            // Handle custom operators like 'gt', 'lt', etc.
            const { operator, value: filterValue } = value as { operator: string; value: any };
            query = query.filter(key, operator, filterValue);
          } else {
            // Default to equality
            query = query.eq(key, value);
          }
        }
      });

      // Apply ordering
      query = query.order(orderBy.column, { ascending: orderBy.ascending });

      // Apply pagination
      query = query.range(start, end);

      // Execute the query
      const { data: result, error: supabaseError, count } = await query;

      if (supabaseError) {
        throw supabaseError;
      }

      setData(result as T[]);
      setTotalCount(count);
    } catch (err) {
      console.error('Error fetching data from Supabase:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    totalCount,
    totalPages: totalCount !== null ? Math.ceil(totalCount / pageSize) : null,
    refetch: fetchData,
    hasMore: totalCount !== null ? page * pageSize < totalCount : false,
  };
};

/**
 * Hook for creating a new record in a Supabase table
 * 
 * @param tableName - The name of the Supabase table
 * @returns Object containing submit function, loading and error states
 */
export const useSupabaseCreate = <T>(tableName: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const create = async (record: Partial<T>): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);

      const { data: result, error: supabaseError } = await supabase
        .from(tableName)
        .insert([record])
        .single();

      if (supabaseError) {
        throw supabaseError;
      }

      setData(result as T);
      return result as T;
    } catch (err) {
      console.error('Error creating record in Supabase:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { create, loading, error, data };
};

/**
 * Hook for updating a record in a Supabase table
 * 
 * @param tableName - The name of the Supabase table
 * @returns Object containing update function, loading and error states
 */
export const useSupabaseUpdate = <T>(tableName: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const update = async (id: number, changes: Partial<T>): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);

      const { data: result, error: supabaseError } = await supabase
        .from(tableName)
        .update(changes)
        .eq('id', id)
        .single();

      if (supabaseError) {
        throw supabaseError;
      }

      setData(result as T);
      return result as T;
    } catch (err) {
      console.error('Error updating record in Supabase:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error, data };
};

/**
 * Hook for deleting a record from a Supabase table
 * 
 * @param tableName - The name of the Supabase table
 * @returns Object containing delete function, loading and error states
 */
export const useSupabaseDelete = (tableName: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const remove = async (id: number): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const { error: supabaseError } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (supabaseError) {
        throw supabaseError;
      }

      setSuccess(true);
      return true;
    } catch (err) {
      console.error('Error deleting record from Supabase:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { remove, loading, error, success };
};

export default { useSupabaseQuery, useSupabaseCreate, useSupabaseUpdate, useSupabaseDelete };
