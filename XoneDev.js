package xyz.janboerman.dummy.dummyplugin;

import org.bukkit.plugin.java.JavaPlugin;
import xyz.janboerman.scalaloader.compat.IScalaLoader;
import xyz.janboerman.scalaloader.plugin.ScalaPluginLoader;
import xyz.janboerman.scalaloader.example.scala.ExamplePlugin$;

public final class DummyPlugin extends JavaPlugin {

    @Override
    public void onEnable() {
        ExamplePlugin$ plugin = (ExamplePlugin$) getServer().getPluginManager().getPlugin("ScalaExample");

        if (!IScalaLoader.getInstance().isPaperPlugin()) {
            ScalaPluginLoader.getInstance().openUpToJavaPlugin(plugin, this);
        }

        getLogger().info("We got " + plugin.getInt() + " from Scala!");
    }

}
