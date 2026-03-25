import type Plugin from "@/types/plugin";

export default Object.values(
    import.meta.glob<Plugin>("./**/index.*", {
        import: "default",
        eager: true,
    }),
);