PGDMP         ,                {            register    13.11    13.11 �    q           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            r           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            s           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            t           1262    16394    register    DATABASE     l   CREATE DATABASE register WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE register;
                postgres    false            �            1259    16397    choices    TABLE     u   CREATE TABLE public.choices (
    id bigint NOT NULL,
    text character varying(40),
    poll_id bigint NOT NULL
);
    DROP TABLE public.choices;
       public         heap    postgres    false            �            1259    16395    choices_id_seq    SEQUENCE     w   CREATE SEQUENCE public.choices_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.choices_id_seq;
       public          postgres    false    201            u           0    0    choices_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.choices_id_seq OWNED BY public.choices.id;
          public          postgres    false    200            �            1259    16405    chusohuu    TABLE     �   CREATE TABLE public.chusohuu (
    id integer NOT NULL,
    khuvuccutru character varying(255),
    ten character varying(255),
    tinhthanh character varying(255),
    id_sohuu integer
);
    DROP TABLE public.chusohuu;
       public         heap    postgres    false            �            1259    16403    chusohuu_id_seq    SEQUENCE     �   CREATE SEQUENCE public.chusohuu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.chusohuu_id_seq;
       public          postgres    false    203            v           0    0    chusohuu_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.chusohuu_id_seq OWNED BY public.chusohuu.id;
          public          postgres    false    202            �            1259    16416    cucdangkiem    TABLE     `   CREATE TABLE public.cucdangkiem (
    id integer NOT NULL,
    tencuc character varying(255)
);
    DROP TABLE public.cucdangkiem;
       public         heap    postgres    false            �            1259    16414    cucdangkiem_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cucdangkiem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.cucdangkiem_id_seq;
       public          postgres    false    205            w           0    0    cucdangkiem_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.cucdangkiem_id_seq OWNED BY public.cucdangkiem.id;
          public          postgres    false    204            �            1259    16424    hangxe    TABLE     \   CREATE TABLE public.hangxe (
    id integer NOT NULL,
    tenhang character varying(255)
);
    DROP TABLE public.hangxe;
       public         heap    postgres    false            �            1259    16422    hangxe_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hangxe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.hangxe_id_seq;
       public          postgres    false    207            x           0    0    hangxe_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.hangxe_id_seq OWNED BY public.hangxe.id;
          public          postgres    false    206            �            1259    16432    kieuxe    TABLE     \   CREATE TABLE public.kieuxe (
    id integer NOT NULL,
    tenkieu character varying(255)
);
    DROP TABLE public.kieuxe;
       public         heap    postgres    false            �            1259    16430    kieuxe_id_seq    SEQUENCE     �   CREATE SEQUENCE public.kieuxe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.kieuxe_id_seq;
       public          postgres    false    209            y           0    0    kieuxe_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.kieuxe_id_seq OWNED BY public.kieuxe.id;
          public          postgres    false    208            �            1259    16440 	   loaisohuu    TABLE     a   CREATE TABLE public.loaisohuu (
    id integer NOT NULL,
    loaisohuu character varying(255)
);
    DROP TABLE public.loaisohuu;
       public         heap    postgres    false            �            1259    16438    loaisohuu_id_seq    SEQUENCE     �   CREATE SEQUENCE public.loaisohuu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.loaisohuu_id_seq;
       public          postgres    false    211            z           0    0    loaisohuu_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.loaisohuu_id_seq OWNED BY public.loaisohuu.id;
          public          postgres    false    210            �            1259    16448    mucdich    TABLE     ]   CREATE TABLE public.mucdich (
    id integer NOT NULL,
    mucdich character varying(255)
);
    DROP TABLE public.mucdich;
       public         heap    postgres    false            �            1259    16446    mucdich_id_seq    SEQUENCE     �   CREATE SEQUENCE public.mucdich_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.mucdich_id_seq;
       public          postgres    false    213            {           0    0    mucdich_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.mucdich_id_seq OWNED BY public.mucdich.id;
          public          postgres    false    212            �            1259    16456 
   phienbanxe    TABLE     {   CREATE TABLE public.phienbanxe (
    id integer NOT NULL,
    tenphienban character varying(255),
    id_hangxe integer
);
    DROP TABLE public.phienbanxe;
       public         heap    postgres    false            �            1259    16454    phienbanxe_id_seq    SEQUENCE     �   CREATE SEQUENCE public.phienbanxe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.phienbanxe_id_seq;
       public          postgres    false    215            |           0    0    phienbanxe_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.phienbanxe_id_seq OWNED BY public.phienbanxe.id;
          public          postgres    false    214            �            1259    16464    polls    TABLE        CREATE TABLE public.polls (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    created_by bigint,
    updated_by bigint,
    expiration_date_time timestamp without time zone NOT NULL,
    question character varying(140)
);
    DROP TABLE public.polls;
       public         heap    postgres    false            �            1259    16462    polls_id_seq    SEQUENCE     u   CREATE SEQUENCE public.polls_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.polls_id_seq;
       public          postgres    false    217            }           0    0    polls_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.polls_id_seq OWNED BY public.polls.id;
          public          postgres    false    216            �            1259    16472    roles    TABLE     V   CREATE TABLE public.roles (
    id bigint NOT NULL,
    name character varying(60)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    16470    roles_id_seq    SEQUENCE     u   CREATE SEQUENCE public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    219            ~           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    218            �            1259    16480    sinhvien    TABLE     �   CREATE TABLE public.sinhvien (
    id integer NOT NULL,
    gioitinh character varying(255),
    hoten character varying(255),
    malop integer,
    masv integer,
    ngaysinh date,
    quequan character varying(255)
);
    DROP TABLE public.sinhvien;
       public         heap    postgres    false            �            1259    16478    sinhvien_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sinhvien_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sinhvien_id_seq;
       public          postgres    false    221                       0    0    sinhvien_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sinhvien_id_seq OWNED BY public.sinhvien.id;
          public          postgres    false    220            �            1259    16491    thongtindangkiem    TABLE     �   CREATE TABLE public.thongtindangkiem (
    id integer NOT NULL,
    maso character varying(255),
    ngaycap date,
    ngayhethan date,
    id_trungtamdangkiem integer,
    id_xe integer
);
 $   DROP TABLE public.thongtindangkiem;
       public         heap    postgres    false            �            1259    16489    thongtindangkiem_id_seq    SEQUENCE     �   CREATE SEQUENCE public.thongtindangkiem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.thongtindangkiem_id_seq;
       public          postgres    false    223            �           0    0    thongtindangkiem_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.thongtindangkiem_id_seq OWNED BY public.thongtindangkiem.id;
          public          postgres    false    222            �            1259    16499    trungtamdangkiem    TABLE     �   CREATE TABLE public.trungtamdangkiem (
    id integer NOT NULL,
    tentrungtam character varying(255),
    id_cucdangkiem integer
);
 $   DROP TABLE public.trungtamdangkiem;
       public         heap    postgres    false            �            1259    16497    trungtamdangkiem_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trungtamdangkiem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.trungtamdangkiem_id_seq;
       public          postgres    false    225            �           0    0    trungtamdangkiem_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.trungtamdangkiem_id_seq OWNED BY public.trungtamdangkiem.id;
          public          postgres    false    224            �            1259    16505 
   user_roles    TABLE     ]   CREATE TABLE public.user_roles (
    user_id bigint NOT NULL,
    role_id bigint NOT NULL
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            �            1259    16512    users    TABLE       CREATE TABLE public.users (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    email character varying(40),
    name character varying(40),
    password character varying(100),
    username character varying(15)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16510    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    228            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    227            �            1259    16520    votes    TABLE     �   CREATE TABLE public.votes (
    id bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    choice_id bigint NOT NULL,
    poll_id bigint NOT NULL,
    user_id bigint NOT NULL
);
    DROP TABLE public.votes;
       public         heap    postgres    false            �            1259    16518    votes_id_seq    SEQUENCE     u   CREATE SEQUENCE public.votes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.votes_id_seq;
       public          postgres    false    230            �           0    0    votes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.votes_id_seq OWNED BY public.votes.id;
          public          postgres    false    229            �            1259    16528    xe    TABLE     /  CREATE TABLE public.xe (
    id integer NOT NULL,
    biendangky character varying(255),
    maso character varying(255),
    namsanxuat integer,
    ngaycap date,
    noidangky character varying(255),
    id_chusohuu integer,
    id_kieuxe integer,
    id_mucdich integer,
    id_phienbanxe integer
);
    DROP TABLE public.xe;
       public         heap    postgres    false            �            1259    16526 	   xe_id_seq    SEQUENCE     �   CREATE SEQUENCE public.xe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
     DROP SEQUENCE public.xe_id_seq;
       public          postgres    false    232            �           0    0 	   xe_id_seq    SEQUENCE OWNED BY     7   ALTER SEQUENCE public.xe_id_seq OWNED BY public.xe.id;
          public          postgres    false    231            �           2604    16400 
   choices id    DEFAULT     h   ALTER TABLE ONLY public.choices ALTER COLUMN id SET DEFAULT nextval('public.choices_id_seq'::regclass);
 9   ALTER TABLE public.choices ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200    201            �           2604    16408    chusohuu id    DEFAULT     j   ALTER TABLE ONLY public.chusohuu ALTER COLUMN id SET DEFAULT nextval('public.chusohuu_id_seq'::regclass);
 :   ALTER TABLE public.chusohuu ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            �           2604    16419    cucdangkiem id    DEFAULT     p   ALTER TABLE ONLY public.cucdangkiem ALTER COLUMN id SET DEFAULT nextval('public.cucdangkiem_id_seq'::regclass);
 =   ALTER TABLE public.cucdangkiem ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            �           2604    16427 	   hangxe id    DEFAULT     f   ALTER TABLE ONLY public.hangxe ALTER COLUMN id SET DEFAULT nextval('public.hangxe_id_seq'::regclass);
 8   ALTER TABLE public.hangxe ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207            �           2604    16435 	   kieuxe id    DEFAULT     f   ALTER TABLE ONLY public.kieuxe ALTER COLUMN id SET DEFAULT nextval('public.kieuxe_id_seq'::regclass);
 8   ALTER TABLE public.kieuxe ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            �           2604    16443    loaisohuu id    DEFAULT     l   ALTER TABLE ONLY public.loaisohuu ALTER COLUMN id SET DEFAULT nextval('public.loaisohuu_id_seq'::regclass);
 ;   ALTER TABLE public.loaisohuu ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            �           2604    16451 
   mucdich id    DEFAULT     h   ALTER TABLE ONLY public.mucdich ALTER COLUMN id SET DEFAULT nextval('public.mucdich_id_seq'::regclass);
 9   ALTER TABLE public.mucdich ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            �           2604    16459    phienbanxe id    DEFAULT     n   ALTER TABLE ONLY public.phienbanxe ALTER COLUMN id SET DEFAULT nextval('public.phienbanxe_id_seq'::regclass);
 <   ALTER TABLE public.phienbanxe ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �           2604    16467    polls id    DEFAULT     d   ALTER TABLE ONLY public.polls ALTER COLUMN id SET DEFAULT nextval('public.polls_id_seq'::regclass);
 7   ALTER TABLE public.polls ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    16475    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    16483    sinhvien id    DEFAULT     j   ALTER TABLE ONLY public.sinhvien ALTER COLUMN id SET DEFAULT nextval('public.sinhvien_id_seq'::regclass);
 :   ALTER TABLE public.sinhvien ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    16494    thongtindangkiem id    DEFAULT     z   ALTER TABLE ONLY public.thongtindangkiem ALTER COLUMN id SET DEFAULT nextval('public.thongtindangkiem_id_seq'::regclass);
 B   ALTER TABLE public.thongtindangkiem ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223            �           2604    16502    trungtamdangkiem id    DEFAULT     z   ALTER TABLE ONLY public.trungtamdangkiem ALTER COLUMN id SET DEFAULT nextval('public.trungtamdangkiem_id_seq'::regclass);
 B   ALTER TABLE public.trungtamdangkiem ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    225    225            �           2604    16515    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �           2604    16523    votes id    DEFAULT     d   ALTER TABLE ONLY public.votes ALTER COLUMN id SET DEFAULT nextval('public.votes_id_seq'::regclass);
 7   ALTER TABLE public.votes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            �           2604    16531    xe id    DEFAULT     ^   ALTER TABLE ONLY public.xe ALTER COLUMN id SET DEFAULT nextval('public.xe_id_seq'::regclass);
 4   ALTER TABLE public.xe ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231    232            O          0    16397    choices 
   TABLE DATA           4   COPY public.choices (id, text, poll_id) FROM stdin;
    public          postgres    false    201   V�       Q          0    16405    chusohuu 
   TABLE DATA           M   COPY public.chusohuu (id, khuvuccutru, ten, tinhthanh, id_sohuu) FROM stdin;
    public          postgres    false    203   s�       S          0    16416    cucdangkiem 
   TABLE DATA           1   COPY public.cucdangkiem (id, tencuc) FROM stdin;
    public          postgres    false    205   ��       U          0    16424    hangxe 
   TABLE DATA           -   COPY public.hangxe (id, tenhang) FROM stdin;
    public          postgres    false    207   ߚ       W          0    16432    kieuxe 
   TABLE DATA           -   COPY public.kieuxe (id, tenkieu) FROM stdin;
    public          postgres    false    209   A�       Y          0    16440 	   loaisohuu 
   TABLE DATA           2   COPY public.loaisohuu (id, loaisohuu) FROM stdin;
    public          postgres    false    211   +�       [          0    16448    mucdich 
   TABLE DATA           .   COPY public.mucdich (id, mucdich) FROM stdin;
    public          postgres    false    213   a�       ]          0    16456 
   phienbanxe 
   TABLE DATA           @   COPY public.phienbanxe (id, tenphienban, id_hangxe) FROM stdin;
    public          postgres    false    215   ��       _          0    16464    polls 
   TABLE DATA           s   COPY public.polls (id, created_at, updated_at, created_by, updated_by, expiration_date_time, question) FROM stdin;
    public          postgres    false    217   ĝ       a          0    16472    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    219   �       c          0    16480    sinhvien 
   TABLE DATA           W   COPY public.sinhvien (id, gioitinh, hoten, malop, masv, ngaysinh, quequan) FROM stdin;
    public          postgres    false    221   �       e          0    16491    thongtindangkiem 
   TABLE DATA           e   COPY public.thongtindangkiem (id, maso, ngaycap, ngayhethan, id_trungtamdangkiem, id_xe) FROM stdin;
    public          postgres    false    223   /�       g          0    16499    trungtamdangkiem 
   TABLE DATA           K   COPY public.trungtamdangkiem (id, tentrungtam, id_cucdangkiem) FROM stdin;
    public          postgres    false    225   u�       h          0    16505 
   user_roles 
   TABLE DATA           6   COPY public.user_roles (user_id, role_id) FROM stdin;
    public          postgres    false    226   ��       j          0    16512    users 
   TABLE DATA           \   COPY public.users (id, created_at, updated_at, email, name, password, username) FROM stdin;
    public          postgres    false    228   מ       l          0    16520    votes 
   TABLE DATA           X   COPY public.votes (id, created_at, updated_at, choice_id, poll_id, user_id) FROM stdin;
    public          postgres    false    230   ^�       n          0    16528    xe 
   TABLE DATA           �   COPY public.xe (id, biendangky, maso, namsanxuat, ngaycap, noidangky, id_chusohuu, id_kieuxe, id_mucdich, id_phienbanxe) FROM stdin;
    public          postgres    false    232   {�       �           0    0    choices_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.choices_id_seq', 1, false);
          public          postgres    false    200            �           0    0    chusohuu_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.chusohuu_id_seq', 1, false);
          public          postgres    false    202            �           0    0    cucdangkiem_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.cucdangkiem_id_seq', 1, false);
          public          postgres    false    204            �           0    0    hangxe_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.hangxe_id_seq', 1, false);
          public          postgres    false    206            �           0    0    kieuxe_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.kieuxe_id_seq', 1, false);
          public          postgres    false    208            �           0    0    loaisohuu_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.loaisohuu_id_seq', 1, false);
          public          postgres    false    210            �           0    0    mucdich_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.mucdich_id_seq', 1, false);
          public          postgres    false    212            �           0    0    phienbanxe_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.phienbanxe_id_seq', 5, true);
          public          postgres    false    214            �           0    0    polls_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.polls_id_seq', 1, false);
          public          postgres    false    216            �           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 2, true);
          public          postgres    false    218            �           0    0    sinhvien_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.sinhvien_id_seq', 1, false);
          public          postgres    false    220            �           0    0    thongtindangkiem_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.thongtindangkiem_id_seq', 1, false);
          public          postgres    false    222            �           0    0    trungtamdangkiem_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.trungtamdangkiem_id_seq', 1, false);
          public          postgres    false    224            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    227            �           0    0    votes_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.votes_id_seq', 1, false);
          public          postgres    false    229            �           0    0 	   xe_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.xe_id_seq', 1, false);
          public          postgres    false    231            �           2606    16402    choices choices_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.choices
    ADD CONSTRAINT choices_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.choices DROP CONSTRAINT choices_pkey;
       public            postgres    false    201            �           2606    16413    chusohuu chusohuu_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.chusohuu
    ADD CONSTRAINT chusohuu_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.chusohuu DROP CONSTRAINT chusohuu_pkey;
       public            postgres    false    203            �           2606    16421    cucdangkiem cucdangkiem_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.cucdangkiem
    ADD CONSTRAINT cucdangkiem_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.cucdangkiem DROP CONSTRAINT cucdangkiem_pkey;
       public            postgres    false    205            �           2606    16429    hangxe hangxe_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.hangxe
    ADD CONSTRAINT hangxe_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.hangxe DROP CONSTRAINT hangxe_pkey;
       public            postgres    false    207            �           2606    16437    kieuxe kieuxe_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.kieuxe
    ADD CONSTRAINT kieuxe_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.kieuxe DROP CONSTRAINT kieuxe_pkey;
       public            postgres    false    209            �           2606    16445    loaisohuu loaisohuu_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.loaisohuu
    ADD CONSTRAINT loaisohuu_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.loaisohuu DROP CONSTRAINT loaisohuu_pkey;
       public            postgres    false    211            �           2606    16453    mucdich mucdich_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.mucdich
    ADD CONSTRAINT mucdich_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.mucdich DROP CONSTRAINT mucdich_pkey;
       public            postgres    false    213            �           2606    16461    phienbanxe phienbanxe_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.phienbanxe
    ADD CONSTRAINT phienbanxe_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.phienbanxe DROP CONSTRAINT phienbanxe_pkey;
       public            postgres    false    215            �           2606    16469    polls polls_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.polls
    ADD CONSTRAINT polls_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.polls DROP CONSTRAINT polls_pkey;
       public            postgres    false    217            �           2606    16477    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    219            �           2606    16488    sinhvien sinhvien_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sinhvien
    ADD CONSTRAINT sinhvien_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sinhvien DROP CONSTRAINT sinhvien_pkey;
       public            postgres    false    221            �           2606    16496 &   thongtindangkiem thongtindangkiem_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.thongtindangkiem
    ADD CONSTRAINT thongtindangkiem_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.thongtindangkiem DROP CONSTRAINT thongtindangkiem_pkey;
       public            postgres    false    223            �           2606    16504 &   trungtamdangkiem trungtamdangkiem_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.trungtamdangkiem
    ADD CONSTRAINT trungtamdangkiem_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.trungtamdangkiem DROP CONSTRAINT trungtamdangkiem_pkey;
       public            postgres    false    225            �           2606    16542 !   users uk6dotkott2kjsp8vw4d0m25fb7 
   CONSTRAINT     ]   ALTER TABLE ONLY public.users
    ADD CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7;
       public            postgres    false    228            �           2606    16544 !   votes uk8um9h2wxsdjrgx3rjjwvny676 
   CONSTRAINT     h   ALTER TABLE ONLY public.votes
    ADD CONSTRAINT uk8um9h2wxsdjrgx3rjjwvny676 UNIQUE (poll_id, user_id);
 K   ALTER TABLE ONLY public.votes DROP CONSTRAINT uk8um9h2wxsdjrgx3rjjwvny676;
       public            postgres    false    230    230            �           2606    16538 "   roles uk_nb4h0p6txrmfc0xbrd1kglp9t 
   CONSTRAINT     ]   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT uk_nb4h0p6txrmfc0xbrd1kglp9t UNIQUE (name);
 L   ALTER TABLE ONLY public.roles DROP CONSTRAINT uk_nb4h0p6txrmfc0xbrd1kglp9t;
       public            postgres    false    219            �           2606    16540 !   users ukr43af9ap4edm43mmtq01oddj6 
   CONSTRAINT     `   ALTER TABLE ONLY public.users
    ADD CONSTRAINT ukr43af9ap4edm43mmtq01oddj6 UNIQUE (username);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT ukr43af9ap4edm43mmtq01oddj6;
       public            postgres    false    228            �           2606    16509    user_roles user_roles_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    226    226            �           2606    16517    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    228            �           2606    16525    votes votes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.votes
    ADD CONSTRAINT votes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.votes DROP CONSTRAINT votes_pkey;
       public            postgres    false    230            �           2606    16536 
   xe xe_pkey 
   CONSTRAINT     H   ALTER TABLE ONLY public.xe
    ADD CONSTRAINT xe_pkey PRIMARY KEY (id);
 4   ALTER TABLE ONLY public.xe DROP CONSTRAINT xe_pkey;
       public            postgres    false    232            �           2606    16610    xe fk1buys19dxjs5fn1dt5fgsmnmb    FK CONSTRAINT     �   ALTER TABLE ONLY public.xe
    ADD CONSTRAINT fk1buys19dxjs5fn1dt5fgsmnmb FOREIGN KEY (id_mucdich) REFERENCES public.mucdich(id);
 H   ALTER TABLE ONLY public.xe DROP CONSTRAINT fk1buys19dxjs5fn1dt5fgsmnmb;
       public          postgres    false    232    213    2976            �           2606    16545 #   choices fk1i68hpih40n447wqx4lpef6ot    FK CONSTRAINT     �   ALTER TABLE ONLY public.choices
    ADD CONSTRAINT fk1i68hpih40n447wqx4lpef6ot FOREIGN KEY (poll_id) REFERENCES public.polls(id);
 M   ALTER TABLE ONLY public.choices DROP CONSTRAINT fk1i68hpih40n447wqx4lpef6ot;
       public          postgres    false    217    201    2980            �           2606    16555 &   phienbanxe fk3t04mb5whkkavb5amrtoja97q    FK CONSTRAINT     �   ALTER TABLE ONLY public.phienbanxe
    ADD CONSTRAINT fk3t04mb5whkkavb5amrtoja97q FOREIGN KEY (id_hangxe) REFERENCES public.hangxe(id);
 P   ALTER TABLE ONLY public.phienbanxe DROP CONSTRAINT fk3t04mb5whkkavb5amrtoja97q;
       public          postgres    false    2970    207    215            �           2606    16605    xe fk5ug81rbugvs1s0hrd4u2ta0nm    FK CONSTRAINT     �   ALTER TABLE ONLY public.xe
    ADD CONSTRAINT fk5ug81rbugvs1s0hrd4u2ta0nm FOREIGN KEY (id_kieuxe) REFERENCES public.kieuxe(id);
 H   ALTER TABLE ONLY public.xe DROP CONSTRAINT fk5ug81rbugvs1s0hrd4u2ta0nm;
       public          postgres    false    209    2972    232            �           2606    16590 !   votes fk7trt3uyihr4g13hva9d31puxg    FK CONSTRAINT     �   ALTER TABLE ONLY public.votes
    ADD CONSTRAINT fk7trt3uyihr4g13hva9d31puxg FOREIGN KEY (poll_id) REFERENCES public.polls(id);
 K   ALTER TABLE ONLY public.votes DROP CONSTRAINT fk7trt3uyihr4g13hva9d31puxg;
       public          postgres    false    217    230    2980            �           2606    16565 ,   thongtindangkiem fkbmn2orxkqw2b6iyde9m8r816c    FK CONSTRAINT     �   ALTER TABLE ONLY public.thongtindangkiem
    ADD CONSTRAINT fkbmn2orxkqw2b6iyde9m8r816c FOREIGN KEY (id_xe) REFERENCES public.xe(id);
 V   ALTER TABLE ONLY public.thongtindangkiem DROP CONSTRAINT fkbmn2orxkqw2b6iyde9m8r816c;
       public          postgres    false    232    3004    223            �           2606    16560 ,   thongtindangkiem fkbte2o0m6idu0ukdf6tonmb6b3    FK CONSTRAINT     �   ALTER TABLE ONLY public.thongtindangkiem
    ADD CONSTRAINT fkbte2o0m6idu0ukdf6tonmb6b3 FOREIGN KEY (id_trungtamdangkiem) REFERENCES public.trungtamdangkiem(id);
 V   ALTER TABLE ONLY public.thongtindangkiem DROP CONSTRAINT fkbte2o0m6idu0ukdf6tonmb6b3;
       public          postgres    false    225    223    2990            �           2606    16550 $   chusohuu fkepysbdumqtmwe5a7pe8oap6x0    FK CONSTRAINT     �   ALTER TABLE ONLY public.chusohuu
    ADD CONSTRAINT fkepysbdumqtmwe5a7pe8oap6x0 FOREIGN KEY (id_sohuu) REFERENCES public.loaisohuu(id);
 N   ALTER TABLE ONLY public.chusohuu DROP CONSTRAINT fkepysbdumqtmwe5a7pe8oap6x0;
       public          postgres    false    211    2974    203            �           2606    16600    xe fkf123dukaybyatgnv3h52hdu6o    FK CONSTRAINT     �   ALTER TABLE ONLY public.xe
    ADD CONSTRAINT fkf123dukaybyatgnv3h52hdu6o FOREIGN KEY (id_chusohuu) REFERENCES public.chusohuu(id);
 H   ALTER TABLE ONLY public.xe DROP CONSTRAINT fkf123dukaybyatgnv3h52hdu6o;
       public          postgres    false    203    232    2966            �           2606    16575 &   user_roles fkh8ciramu9cc9q3qcqiv4ue8a6    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES public.roles(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6;
       public          postgres    false    226    2982    219            �           2606    16580 &   user_roles fkhfh9dx7w3ubf1co1vdev94g3f    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id) REFERENCES public.users(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f;
       public          postgres    false    226    228    2998            �           2606    16595 !   votes fkli4uj3ic2vypf5pialchj925e    FK CONSTRAINT     �   ALTER TABLE ONLY public.votes
    ADD CONSTRAINT fkli4uj3ic2vypf5pialchj925e FOREIGN KEY (user_id) REFERENCES public.users(id);
 K   ALTER TABLE ONLY public.votes DROP CONSTRAINT fkli4uj3ic2vypf5pialchj925e;
       public          postgres    false    228    230    2998            �           2606    16585 !   votes fkomskymhxde3qq9mcukyp1puio    FK CONSTRAINT     �   ALTER TABLE ONLY public.votes
    ADD CONSTRAINT fkomskymhxde3qq9mcukyp1puio FOREIGN KEY (choice_id) REFERENCES public.choices(id);
 K   ALTER TABLE ONLY public.votes DROP CONSTRAINT fkomskymhxde3qq9mcukyp1puio;
       public          postgres    false    230    201    2964            �           2606    16615    xe fkpxmohxbgohr9jh2a2q0r9r82l    FK CONSTRAINT     �   ALTER TABLE ONLY public.xe
    ADD CONSTRAINT fkpxmohxbgohr9jh2a2q0r9r82l FOREIGN KEY (id_phienbanxe) REFERENCES public.phienbanxe(id);
 H   ALTER TABLE ONLY public.xe DROP CONSTRAINT fkpxmohxbgohr9jh2a2q0r9r82l;
       public          postgres    false    215    2978    232            �           2606    16570 ,   trungtamdangkiem fktl9uvtodlgp8teg67buatn390    FK CONSTRAINT     �   ALTER TABLE ONLY public.trungtamdangkiem
    ADD CONSTRAINT fktl9uvtodlgp8teg67buatn390 FOREIGN KEY (id_cucdangkiem) REFERENCES public.cucdangkiem(id);
 V   ALTER TABLE ONLY public.trungtamdangkiem DROP CONSTRAINT fktl9uvtodlgp8teg67buatn390;
       public          postgres    false    205    2968    225            O      x������ � �      Q   /   x�3��HT������H�ˀq��83�s9���sR��lC�=... b7Q      S      x�3�L.MVHI�KW��L������ D��      U   R   x�3����KI�2�t�/J�2���t�2�ɯ�/I�2��M-JNMI-�uJͫ�2�424�2�44� 1��%�c�eh �b���� lq      W   �   x������@�k�)~�	1�B��&�Gv�΂nDkk���"�"\a�)�X�=�Mܨ)lf`���1Ө�/h{�vf-�m�1P�d���ҙm���T .ҙ��)�F��6T�Ð�K.�ŗ?���������c�!LSg6�K��m�y>�˃B�|~޺,��Z��Ye����*��N�����|�8s���X�=��'���z!c�
��M      Y   &   x�3�L�O��P�K��L-�2�LNT��H������ �"`      [   �   x�3�ty��;9C����
�w�W��8�09�ː�ȄL����f*$^���qxQ�1�������)�<ܵ8�˄3��Y�$#1_�����L��BI��\���6[���P��pw{��-@N���3�ҹb���� ܽ?�      ]   �   x�E�K
�0����*\���a;�R��Ŋ�I��JnIcQW��:�w���qSz� E�r��au�j��(�� j��}���m�8C�r�ڣ�;�M��a�([�Fr>,��=�jD"B�(�̦�J���	J�g���p��Z$8-Hqh[rO����?�p\[V��V�+w������/O�f+����A      _      x������ � �      a   !   x�3���q�v�2��]|=��b���� t��      c      x������ � �      e   6   x�E��	  ���.'m�q�9��B�$p�A��\�:���4�>�E�q2� �Ρ�      g   1   x�3�,)*�KW(I�U�HT����4�2B�WH��T���� ���qqq �[0      h      x�3�4����� ]      j   w   x�3�4202�50�54P04�22�24ѳ47�)n鹉�9z����!��Q����JE���A~N��eVV��I�Wi���^�we�phPi�ixyNAy��Q�[qeZN�W^NZ*��=... �-%V      l      x������ � �      n   M   x�5�1
�@��+�@$����\��Y�����T3�$ʦ�K�#q�m�.҈��Q=���T�X��v�f����     