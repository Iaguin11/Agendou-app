# 🗓️ Agendou

Uma aplicação full stack moderna para agendamento de horários, similar ao Calendly. Permite que usuários configurem sua disponibilidade, gerem links públicos personalizados e recebam agendamentos de forma automatizada.

## ✨ Funcionalidades

### 👤 Usuário
- Cadastro e login com e-mail/senha
- Login com Google OAuth (planejado)
- Edição completa de perfil
- Username personalizado

### 🗓️ Agendamento
- Configuração flexível de dias e horários disponíveis
- Duração personalizada dos atendimentos (15min, 30min, 60min, etc.)
- Página pública personalizada: `agendou.com/seuusername`
- Interface intuitiva para visitantes agendarem
- Sistema inteligente de prevenção de conflitos

### 🔔 Notificações
- E-mails automáticos de confirmação para ambas as partes
- Lembretes automáticos (planejado)
- Templates profissionais de e-mail

### 📊 Painel Administrativo
- Dashboard com estatísticas e próximos agendamentos
- Gestão completa de disponibilidade
- Visualização e gerenciamento de todos os agendamentos
- Configurações de conta e preferências

## 🛠️ Stack Tecnológica

### Backend
- **Node.js** com **TypeScript**
- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação stateless
- **Nodemailer** - Envio de e-mails
- **Zod** - Validação de schemas
- **bcryptjs** - Hash de senhas

### Frontend
- **React 18** com **TypeScript**
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animações fluidas
- **React Hook Form** + **Zod** - Formulários com validação
- **Axios** - Cliente HTTP
- **React Router DOM** - Roteamento
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
agendou/
├── frontend/
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── contexts/      # Contextos React
│   │   ├── services/      # Serviços de API
│   │   ├── hooks/         # Hooks customizados (planejado)
│   │   └── utils/         # Utilitários frontend
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- Conta de e-mail para SMTP (Gmail recomendado)

### Frontend

1. **Entre na pasta do frontend:**
```bash
cd frontend
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente (opcional):**
```bash
# .env.local
VITE_API_URL=http://localhost:3001/api
```

4. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

O frontend estará rodando em `http://localhost:3000`

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL com Prisma ORM. O schema inclui:

- **User**: Dados do usuário e configurações
- **Availability**: Horários disponíveis por dia da semana
- **Appointment**: Agendamentos realizados
- **CalendarSettings**: Configurações de integração com calendários externos

## 📧 Configuração de E-mail

Para envio de e-mails, configure um servidor SMTP. Para Gmail:

1. Ative a verificação em duas etapas
2. Gere uma senha de app específica
3. Use as credenciais no arquivo `.env`

## 🎨 Design e UX

- **Design System**: Baseado em Tailwind CSS com paleta profissional
- **Responsive**: Interface totalmente adaptável a diferentes telas
- **Acessibilidade**: Componentes seguem padrões de acessibilidade
- **Animações**: Transições suaves com Framer Motion
- **Typography**: Font Inter para máxima legibilidade

## 🔒 Segurança

- Autenticação JWT com refresh tokens
- Hash de senhas com bcrypt
- Validação de dados com Zod
- Sanitização de inputs
- Rate limiting (planejado)
- CORS configurado adequadamente

## 📱 Funcionalidades Planejadas

- [ ] Integração com Google Calendar
- [ ] Login social (Google, GitHub)
- [ ] Lembretes automáticos por e-mail
- [ ] Webhooks para integrações
- [ ] API pública
- [ ] Temas personalizados
- [ ] Multi-idioma
- [ ] Pagamentos (Stripe)
- [ ] Relatórios avançados
- [ ] App mobile (React Native)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Calendly](https://calendly.com) pela inspiração
- [Shadcn/ui](https://ui.shadcn.com) pelos componentes base
- [Lucide](https://lucide.dev) pelos ícones
- [Framer Motion](https
