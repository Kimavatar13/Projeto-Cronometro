-- =============================================
-- DEBATE TIMER - SUPABASE DATABASE SETUP
-- =============================================
-- Execute este SQL no SQL Editor do Supabase
-- Dashboard > SQL Editor > New Query

-- 1. Criar tabela de participantes
CREATE TABLE IF NOT EXISTS participants (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  total_time INTEGER NOT NULL DEFAULT 120,
  remaining_time INTEGER NOT NULL DEFAULT 120,
  color TEXT DEFAULT '#3498db',
  has_spoken BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Criar tabela de estado do timer
CREATE TABLE IF NOT EXISTS timer_state (
  id TEXT PRIMARY KEY DEFAULT '1',
  current_speaker_id TEXT REFERENCES participants(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'stopped' CHECK (status IN ('running', 'paused', 'stopped', 'finished')),
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

-- =============================================
-- 5. HABILITAR REALTIME - CRÍTICO!
-- =============================================
-- Isto é o que permite a sincronização em tempo real entre dispositivos

-- Primeiro, remover as tabelas da publicação se já existirem (evita erros)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'participants'
  ) THEN
    ALTER PUBLICATION supabase_realtime DROP TABLE participants;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'timer_state'
  ) THEN
    ALTER PUBLICATION supabase_realtime DROP TABLE timer_state;
  END IF;
END $$;

-- Agora adicionar as tabelas à publicação realtime
ALTER PUBLICATION supabase_realtime ADD TABLE participants;
ALTER PUBLICATION supabase_realtime ADD TABLE timer_state;

-- =============================================
-- 6. Configurar REPLICA IDENTITY para DELETE funcionar
-- =============================================
ALTER TABLE participants REPLICA IDENTITY FULL;
ALTER TABLE timer_state REPLICA IDENTITY FULL;

-- =============================================
-- 7. Inserir dados iniciais (se não existirem)
-- =============================================
INSERT INTO timer_state (id, status) 
VALUES ('1', 'stopped')
ON CONFLICT (id) DO NOTHING;

INSERT INTO participants (id, name, total_time, remaining_time, color, has_spoken) VALUES
  ('1', 'Grupo A', 120, 120, '#3498db', FALSE),
  ('2', 'Grupo B', 120, 120, '#e74c3c', FALSE),
  ('3', 'Grupo C', 120, 120, '#2ecc71', FALSE),
  ('4', 'Grupo D', 120, 120, '#f39c12', FALSE)
ON CONFLICT (id) DO NOTHING;

-- =============================================
-- VERIFICAÇÃO DO REALTIME
-- =============================================
-- Execute esta query para verificar se as tabelas estão na publicação:
-- SELECT * FROM pg_publication_tables WHERE pubname = 'supabase_realtime';

-- =============================================
-- MIGRAÇÃO (para bases de dados existentes)
-- =============================================
-- Se já tiver as tabelas criadas com UUID, execute:
-- 
-- DROP TABLE IF EXISTS timer_state;
-- DROP TABLE IF EXISTS participants;
-- E depois execute o script completo acima
