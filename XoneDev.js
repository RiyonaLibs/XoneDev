package xyz.janboerman.dummy.dummyplugin;

import org.bukkit.plugin.java.JavaPlugin;
import xyz.janboerman.scalaloader.compat.IScalaLoader;
import xyz.janboerman.scalaloader.plugin.ScalaPluginLoader;
import xyz.janboerman.scalaloader.example.scala.ExamplePlugin$;

public final class DummyPlugin extends JavaPlugin {

    @Override
    public void onEnable() {
        //get the plugin instance
        ExamplePlugin$ plugin = (ExamplePlugin$) getServer().getPluginManager().getPlugin("ScalaExample");

        //make sure all classes from the scala plugin can be accessed
        if (!IScalaLoader.getInstance().isPaperPlugin()) {
            ScalaPluginLoader.getInstance().openUpToJavaPlugin(plugin, this);
        }

        //do whatever you want afterwards by xonedev!
        getLogger().info("We got " + plugin.getInt() + " from Scala!");
    }

}