import { useEffect, useState } from "react";
import { Box, Button, Card, Container, DropdownMenu, Flex, Grid, Heading, IconButton, Link, Separator, Text } from "@radix-ui/themes";
import {
  Archive,
  Bot,
  Check,
  ChevronDown,
  Cloud,
  Copy,
  Download,
  ExternalLink,
  FileSymlink,
  Globe,
  Keyboard,
  Languages,
  Palette,
  Server,
  ShieldCheck,
  Type,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { LOCALES } from "@/i18n/locales";
import { useLatestRelease, type AssetKind, type OS, detectOS } from "@/lib/release";

/** lucide 1.x 去掉了品牌图标，GitHub 标志用官方路径内联 */
function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  );
}

const REPO = "https://github.com/reiy-leo/reicky";
const RELEASES = `${REPO}/releases/latest`;
const YDIYR = "https://your-data-is-your-responsibility.rei8t.dev";
const FEATURE_ICONS = [Palette, FileSymlink, Archive, Type, Keyboard, Languages];
const OS_NAME: Record<OS, string> = { mac: "macOS", windows: "Windows", linux: "Linux" };
const PRIMARY: Record<OS, AssetKind> = { mac: "dmg", windows: "exe", linux: "appimage" };
const KINDS: AssetKind[] = ["dmg", "exe", "msi", "appimage", "deb", "rpm"];

const MCP_CONFIG = `{
  "mcpServers": {
    "reicky": {
      "command": "/Applications/reicky.app/Contents/MacOS/reicky",
      "args": ["--mcp"]
    }
  }
}`;

/** 贴纸颜色，和 reicky 应用里的一致（src/api.ts COLORS） */
const NOTE_COLORS = [
  { light: "#fff7b1", dark: "#534d2d", edge: "#efe08a", edgeDark: "#6b6231" },
  { light: "#d6ecff", dark: "#374550", edge: "#b3d6f5", edgeDark: "#405669" },
  { light: "#ffd9e8", dark: "#523b43", edge: "#f5b6cf", edgeDark: "#6a4754" },
];

function Header() {
  const { t, locale, setLocale } = useI18n();
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--color-background) 80%, transparent)" }}>
      <Container size="4" px="5">
        <Flex align="center" justify="between" py="3">
          <a href="#top" className="flex items-center gap-2 no-underline">
            <img src="/icon.png" alt="" width={28} height={28} className="rounded-md" />
            <Text weight="bold" size="4">
              {t.brand}
            </Text>
          </a>
          <Flex align="center" gap="4">
            {/* 用原生 nav：Radix Flex 的 display 不分层，会盖掉 Tailwind 的 hidden */}
            <nav className="hidden gap-4 sm:flex">
              {(["features", "sync", "mcp", "download"] as const).map((k) => (
                <Link key={k} href={`#${k}`} color="gray" size="2" underline="hover">
                  {t.nav[k]}
                </Link>
              ))}
            </nav>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="ghost" color="gray" aria-label={t.nav.language}>
                  <Globe size={16} />
                  {LOCALES.find((l) => l.code === locale)!.label}
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                {LOCALES.map((l) => (
                  <DropdownMenu.Item key={l.code} onSelect={() => setLocale(l.code)}>
                    <span lang={l.htmlLang}>{l.label}</span>
                    {l.code === locale && <Check size={14} className="ml-auto" />}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <IconButton asChild variant="ghost" color="gray" aria-label="GitHub">
              <a href={REPO} target="_blank" rel="noreferrer">
                <GithubMark />
              </a>
            </IconButton>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

function NoteDemo({ dark }: { dark: boolean }) {
  const { t } = useI18n();
  const notes = [t.demo.note1, t.demo.note2, t.demo.note3];
  const pos = ["left-[0%] top-[8%] -rotate-3", "left-[30%] top-[38%] rotate-2", "left-[60%] top-[0%] -rotate-1"];
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[560px]" aria-hidden>
      {notes.map((text, i) => {
        const c = NOTE_COLORS[i]!;
        return (
          <div
            key={i}
            className={`absolute w-[38%] max-w-[200px] rounded-[6px] p-4 shadow-xl ${pos[i]}`}
            style={{
              background: dark ? c.dark : c.light,
              borderTop: `18px solid ${dark ? c.edgeDark : c.edge}`,
              color: dark ? "#f2f2ee" : "#3a3626",
            }}
          >
            {text.split("\n").map((line, j) => {
              const todo = line.match(/^- \[( |x)\] (.*)$/);
              if (todo)
                return (
                  <div key={j} className="flex items-center gap-2 text-[14px] leading-6">
                    <span className="inline-flex h-[13px] w-[13px] items-center justify-center rounded-[3px] border border-current opacity-70">
                      {todo[1] === "x" && <Check size={10} strokeWidth={3} />}
                    </span>
                    <span className={todo[1] === "x" ? "line-through opacity-60" : ""}>{todo[2]}</span>
                  </div>
                );
              const path = line.startsWith("~/");
              return (
                <div key={j} className={`text-[14px] leading-6 ${path ? "truncate underline decoration-dotted underline-offset-2" : ""} ${j === 0 && !path ? "font-medium" : ""}`}>
                  {line}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function Hero({ dark }: { dark: boolean }) {
  const { t } = useI18n();
  const release = useLatestRelease();
  const os = detectOS();
  const primary = os && release.assets[PRIMARY[os]];
  return (
    <section id="top">
      <Container size="4" px="5" pt={{ initial: "8", md: "9" }} pb="8">
        <Grid columns={{ initial: "1", md: "2" }} gap="8" align="center">
          <Flex direction="column" gap="5">
            <Heading size={{ initial: "8", md: "9" }} className="whitespace-pre-line" style={{ letterSpacing: "-0.02em" }}>
              {t.hero.title}
            </Heading>
            <Text size="4" color="gray" className="max-w-[34em]">
              {t.hero.subtitle}
            </Text>
            <Flex gap="3" wrap="wrap" align="center">
              <Button asChild size="3" highContrast>
                <a href={primary ?? "#download"}>
                  <Download size={18} />
                  {os ? t.hero.download(OS_NAME[os]) : t.hero.downloadAll}
                </a>
              </Button>
              <Button asChild size="3" variant="soft" color="gray">
                <a href="#download">{t.hero.other}</a>
              </Button>
            </Flex>
            <Text size="2" color="gray">
              {release.version ? t.hero.version(release.version) : release.failed ? "" : t.hero.loading}
            </Text>
          </Flex>
          <NoteDemo dark={dark} />
        </Grid>
      </Container>
    </section>
  );
}

function Section({ id, title, children, sub }: { id: string; title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16">
      <Container size="4" px="5" py="8">
        <Heading size="7" mb={sub ? "2" : "6"}>
          {title}
        </Heading>
        {sub && (
          <Text as="p" size="3" color="gray" mb="6" className="max-w-[44em]">
            {sub}
          </Text>
        )}
        {children}
      </Container>
    </section>
  );
}

function Features() {
  const { t } = useI18n();
  return (
    <Section id="features" title={t.features.title}>
      <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
        {t.features.items.map((f, i) => {
          const Icon = FEATURE_ICONS[i]!;
          return (
            <Card key={f.title} size="3">
              <Flex direction="column" gap="2">
                <Icon size={22} strokeWidth={1.8} />
                <Heading as="h3" size="4">
                  {f.title}
                </Heading>
                <Text size="2" color="gray">
                  {f.body}
                </Text>
              </Flex>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}

function Sync() {
  const { t } = useI18n();
  const items = [
    { icon: Cloud, ...t.sync.google },
    { icon: Server, ...t.sync.webdav },
  ];
  return (
    <Section id="sync" title={t.sync.title} sub={t.sync.body}>
      <Grid columns={{ initial: "1", sm: "2" }} gap="4" mb="5">
        {items.map(({ icon: Icon, title, body }) => (
          <Card key={title} size="3">
            <Flex gap="3" align="start">
              <Icon size={22} strokeWidth={1.8} className="mt-0.5 shrink-0" />
              <Box>
                <Heading as="h3" size="4" mb="1">
                  {title}
                </Heading>
                <Text size="2" color="gray">
                  {body}
                </Text>
              </Box>
            </Flex>
          </Card>
        ))}
      </Grid>
      <Link href={YDIYR} target="_blank" rel="noreferrer" size="2" className="inline-flex items-center gap-1.5">
        <ShieldCheck size={16} />
        {t.sync.ydiyr}
        <ExternalLink size={13} />
      </Link>
    </Section>
  );
}

function Mcp() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(MCP_CONFIG);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <Section id="mcp" title={t.mcp.title} sub={t.mcp.body}>
      <Card size="2" className="max-w-[640px]">
        <Flex justify="between" align="center" mb="2">
          <Flex align="center" gap="2">
            <Bot size={16} />
            <Text size="2" weight="medium">
              MCP
            </Text>
          </Flex>
          <Button size="1" variant="ghost" color="gray" onClick={copy}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? t.mcp.copied : t.mcp.copy}
          </Button>
        </Flex>
        <pre className="m-0 overflow-x-auto text-[13px] leading-5" style={{ fontFamily: "var(--code-font-family)" }}>
          {MCP_CONFIG}
        </pre>
      </Card>
      <Text as="p" size="2" color="gray" mt="3">
        {t.mcp.hint}
      </Text>
    </Section>
  );
}

function Downloads() {
  const { t } = useI18n();
  const release = useLatestRelease();
  return (
    <Section id="download" title={t.download.title} sub={t.download.subtitle}>
      <Card size="2" className="max-w-[640px]">
        <Flex direction="column">
          {KINDS.map((k, i) => {
            const href = release.assets[k];
            return (
              <Box key={k}>
                {i > 0 && <Separator size="4" my="2" />}
                <Flex justify="between" align="center" gap="3" py="1">
                  <Text size="2">{t.download.rows[k]}</Text>
                  <Button asChild size="1" variant="soft" color="gray">
                    <a href={href ?? RELEASES}>
                      <Download size={14} />
                      {href ? release.version : "GitHub"}
                    </a>
                  </Button>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </Card>
      <Text as="p" size="2" color="gray" mt="3" className="max-w-[640px]">
        {t.download.macHint}
      </Text>
      <Flex mt="3" gap="4" wrap="wrap">
        <Link href={RELEASES} target="_blank" rel="noreferrer" size="2" className="inline-flex items-center gap-1">
          {release.failed ? t.download.failed : t.download.allReleases}
          <ExternalLink size={13} />
        </Link>
      </Flex>
    </Section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer>
      <Container size="4" px="5" py="6">
        <Separator size="4" mb="5" />
        <Flex gap="4" wrap="wrap" align="center">
          <Text size="2" color="gray">
            {t.footer.license}
          </Text>
          <Link href={REPO} target="_blank" rel="noreferrer" size="2" color="gray">
            {t.footer.source}
          </Link>
          <Link href="https://me.rei8t.dev" target="_blank" rel="noreferrer" size="2" color="gray">
            {t.footer.by}
          </Link>
        </Flex>
      </Container>
    </footer>
  );
}

export function App({ dark }: { dark: boolean }) {
  const { t } = useI18n();
  useEffect(() => {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [t]);
  return (
    <>
      <Header />
      <main>
        <Hero dark={dark} />
        <Features />
        <Sync />
        <Mcp />
        <Downloads />
      </main>
      <Footer />
    </>
  );
}
