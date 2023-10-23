--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Items" (
    id integer NOT NULL,
    name character varying(255),
    category character varying(255),
    price integer,
    stock integer,
    image character varying(255),
    "UserId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Items" OWNER TO postgres;

--
-- Name: Items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Items_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Items_id_seq" OWNER TO postgres;

--
-- Name: Items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Items_id_seq" OWNED BY public."Items".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    password character varying(255),
    image character varying(255),
    role character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items" ALTER COLUMN id SET DEFAULT nextval('public."Items_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Items" (id, name, category, price, stock, image, "UserId", "createdAt", "updatedAt") FROM stdin;
7	\tAcer Predator 	gaming	999	9	https://via.placeholder.com/100	1	2023-10-17 17:19:38.671+08	2023-10-17 17:19:38.671+08
1	Asus ROG	laptop	15000000	10	https://via.placeholder.com/100	1	2023-10-17 15:47:53.5+08	2023-10-17 18:03:25.351+08
8	Dell AlienWare2	program	555	5	https://via.placeholder.com/100	1	2023-10-17 18:05:24.375+08	2023-10-17 18:05:24.375+08
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20231017072529-create-user.js
20231017072536-create-item.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, username, email, password, image, role, "createdAt", "updatedAt") FROM stdin;
1	admin	admin@email.com	$2b$10$qh20Tw7dMkOjOMF.j1CS2.FYYqG1BC2YTF5wcOIgUwos/GKkfcjhS	https://via.placeholder.com/100	admin	2023-10-17 16:16:29.778+08	2023-10-17 16:39:22.577+08
3	admin11	admin1@email1.com	$2b$10$4.S3f0U9kDgOmIJhugyuke5mcqFg0/gtzXpIQoYEdw20I/OGXcBuW	https://via.placeholder.com/100	admin	2023-10-17 16:54:01.748+08	2023-10-17 16:54:01.748+08
4	username	username@email.com	$2b$10$2jWxWDuvH9IbLSaLrp8xg.ss83CTLeZ7fo2HypCn8D0QPrf4nMo.W	https://via.placeholder.com/100	notadmin	2023-10-18 00:01:23.893+08	2023-10-18 00:01:23.893+08
5	username2	username2@email.com	$2b$10$Xx.YpqO9HYOkHC1il6iDduNX.wIOBS.yx1ODVl4moV9veRQ5vcY0O	https://via.placeholder.com/100	admin	2023-10-18 00:03:38.866+08	2023-10-18 00:03:38.866+08
6	reactuser1	reactuser1@email.com	$2b$10$faBlkVFhK6y90IqX7DT4Iebd81H3fSVkOaq.0PVppl1piWH.A.qN6	https://via.placeholder.com/100	notadmin	2023-10-18 00:04:44.612+08	2023-10-18 00:14:06.46+08
\.


--
-- Name: Items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Items_id_seq"', 8, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 7, true);


--
-- Name: Items Items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Items_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

