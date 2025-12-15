-- =============================================
-- DEBATE TIMER - SUPABASE DATABASE SETUP
-- =============================================
-- Execute este SQL no SQL Editor do Supabase
-- Dashboard > SQL Editor > New Query

-- 1. Criar tabela de participantes
CREATE TABLE IF NOT EXISTS participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  total_time INTEGER NOT NULL DEFAULT 120,
  remaining_time INTEGER NOT NULL DEFAULT 120,
  color TEXT DEFAULT '#3498db',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Criar tabela de estado do timer
CREATE TABLE IF NOT EXISTS timer_state (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  current_speaker_id UUID REFERENCES participants(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'stopped' CHECK (status IN ('running', 'paused', 'stopped')),
  started_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Habilitar Row Level Security (RLS)
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE timer_state ENABLE ROW LEVEL SECURITY;

-- 4. Criar políticas para permitir acesso público (leitura e escrita)
-- Política para participants - SELECT
CREATE POLICY "Allow public read access on participants" 
  ON participants FOR SELECT 
  USING (true);

-- Política para participants - INSERT
CREATE POLICY "Allow public insert on participants" 
  ON participants FOR INSERT 
  WITH CHECK (true);

-- Política para participants - UPDATE
CREATE POLICY "Allow public update on participants" 
  ON participants FOR UPDATE 
  USING (true);

-- Política para participants - DELETE
CREATE POLICY "Allow public delete on participants" 
  ON participants FOR DELETE 
  USING (true);

-- Política para timer_state - SELECT
CREATE POLICY "Allow public read access on timer_state" 
  ON timer_state FOR SELECT 
  USING (true);

-- Política para timer_state - INSERT
CREATE POLICY "Allow public insert on timer_state" 
  ON timer_state FOR INSERT 
  WITH CHECK (true);

-- Política para timer_state - UPDATE
CREATE POLICY "Allow public update on timer_state" 
  ON timer_state FOR UPDATE 
  USING (true);

-- 5. Habilitar Realtime para as tabelas
ALTER PUBLICATION supabase_realtime ADD TABLE participants;
ALTER PUBLICATION supabase_realtime ADD TABLE timer_state;

-- 6. Inserir participantes de exemplo
INSERT INTO participants (name, total_time, remaining_time, color) VALUES
  ('Grupo A', 120, 120, '#3498db'),
  ('Grupo B', 120, 120, '#e74c3c'),
  ('Grupo C', 120, 120, '#2ecc71'),
  ('Grupo D', 120, 120, '#f39c12');

-- 7. Inserir estado inicial do timer
INSERT INTO timer_state (status) VALUES ('stopped');

-- =============================================
-- VERIFICAÇÃO
-- =============================================
-- Depois de executar, verifique se as tabelas foram criadas:
-- SELECT * FROM participants;
-- SELECT * FROM timer_state;
