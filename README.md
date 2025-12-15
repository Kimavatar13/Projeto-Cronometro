# Debate Timer - Cronómetro de Debate

Sistema de cronometragem para debates com sincronização em tempo real, estilo debate eleitoral.

## 🚀 Funcionalidades

- **Página Pública**: Visualização do cronómetro com o orador ativo em destaque
- **Página de Gestão**: Controle total do moderador
- **Múltiplos Participantes**: Cada grupo com seu próprio tempo
- **Sincronização em Tempo Real**: Via Supabase Realtime
- **Cores por Participante**: Visual diferenciado por grupo
- **Indicadores Visuais**: Verde (>50%), Amarelo (10-50%), Vermelho (<10%)
- **Animação nos últimos segundos**: Piscar quando resta pouco tempo

## 📦 Instalação

```bash
npm install
```

## ⚙️ Configuração do Supabase (Opcional)

1. Crie um projeto no [Supabase](https://supabase.com)
2. Copie `.env.example` para `.env.local`
3. Preencha as variáveis com as credenciais do seu projeto

```bash
cp .env.example .env.local
```

4. Execute o seguinte SQL no Supabase para criar as tabelas:

```sql
-- Tabela de participantes
CREATE TABLE participants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  total_time INTEGER NOT NULL DEFAULT 120,
  remaining_time INTEGER NOT NULL DEFAULT 120,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de estado do timer
CREATE TABLE timer_state (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  current_speaker_id UUID REFERENCES participants(id),
  status TEXT NOT NULL DEFAULT 'stopped' CHECK (status IN ('running', 'paused', 'stopped')),
  started_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE participants;
ALTER PUBLICATION supabase_realtime ADD TABLE timer_state;

-- Inserir participantes de exemplo
INSERT INTO participants (name, total_time, remaining_time, color) VALUES
  ('Grupo A', 120, 120, '#3498db'),
  ('Grupo B', 120, 120, '#e74c3c'),
  ('Grupo C', 120, 120, '#2ecc71'),
  ('Grupo D', 120, 120, '#f39c12');

-- Inserir estado inicial
INSERT INTO timer_state (status) VALUES ('stopped');
```

**Nota**: Sem configurar o Supabase, a aplicação funciona em modo local (sem sincronização entre dispositivos).

## 🖥️ Execução

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

Acesse:
- **Visualização Pública**: http://localhost:3000
- **Gestão (Moderador)**: http://localhost:3000/admin

## 📁 Estrutura

```
app/
├── page.tsx              # Página pública de visualização
├── page.module.css
├── layout.tsx
├── globals.css
├── admin/
│   ├── page.tsx          # Página de gestão (moderador)
│   └── page.module.css
├── components/
│   ├── Timer.tsx         # Componente de timer
│   ├── Timer.module.css
│   ├── Controls.tsx      # Controles do moderador
│   ├── Controls.module.css
│   ├── ParticipantList.tsx
│   └── ParticipantList.module.css
└── lib/
    ├── supabase.ts       # Cliente Supabase
    ├── types.ts          # Tipos TypeScript
    └── useDebateTimer.ts # Hook principal
```

## 🎨 Layout

### Página Pública
- Cronómetro grande central do orador ativo
- Lista lateral com os outros participantes
- Cores indicativas do tempo restante

### Página de Gestão
- Status atual (a correr/pausado/parado)
- Botões de controle global
- Lista de participantes com ações individuais
- Formulário para adicionar novos participantes

## 🔧 Arquitetura

- **Fonte da verdade**: Timestamps no banco, não setInterval
- **Cálculo do tempo**: `remaining = duration - (now - started_at)`
- **Sincronização**: Supabase Realtime para atualizações em tempo real
- **Modo local**: Funciona offline com estado local
