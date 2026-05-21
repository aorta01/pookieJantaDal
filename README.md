# Pookie Janta Dal

Next.js app converted from the original static page, with Prisma-backed certificate generation.

## Database Setup

Create a local `.env` file and set your current test database URL:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
```

Generate Prisma Client:

```bash
npm run db:generate
```

Push the schema to your test database:

```bash
npm run db:push
```

For migration-based workflows:

```bash
npm run db:migrate
```

## Docker Postgres

A Postgres container is packaged with the app in `docker-compose.yml`.

Start it:

```bash
docker compose up -d pjd-db
```

Then use this URL in `.env`:

```bash
DATABASE_URL="postgresql://pjd_user:pjd_password@localhost:5432/pjd?schema=public"
```

Apply the Prisma schema:

```bash
npm run db:push
```

## Certificate Flow

The membership form posts to:

```text
POST /api/certificates
```

The API stores member credentials in `Member` and issued certificate data in `Certificate`, then returns the certificate code/date/name used by the printable certificate UI.
