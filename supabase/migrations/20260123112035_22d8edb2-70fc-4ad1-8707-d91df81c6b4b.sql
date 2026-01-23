-- Create customer_inquiries table
CREATE TABLE public.customer_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) <= 100),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  message TEXT NOT NULL CHECK (char_length(message) <= 1000),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.customer_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit inquiries (public insert)
CREATE POLICY "Anyone can submit inquiries"
  ON public.customer_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can view inquiries (for admin purposes)
CREATE POLICY "Authenticated users can view inquiries"
  ON public.customer_inquiries
  FOR SELECT
  TO authenticated
  USING (true);