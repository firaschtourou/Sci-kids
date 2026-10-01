import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { FieldColour } from '@blockly/field-colour'; // Importation correcte// Assurez-vous que le nom du fichier est correct
import styles from './BlocklyComponent.module.css';
import run from './run_icon.png'
import save from './save_icon.png'
import addPhotoIcon from './add_photo_icon.png';

// Bloc pour déplacer l'image
Blockly.Blocks['image_move'] = {
  init: function() {
    this.appendValueInput("STEPS")
        .setCheck("Number")
        .appendField(" بكسل")
        .appendField(new Blockly.FieldNumber(10), "STEPS")
        .appendField("  حرك التصويرة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Move the image horizontally");
    this.setHelpUrl("");
  }
};

// Bloc pour tourner l'image
Blockly.Blocks['image_rotate'] = {
  init: function() {
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField("درجة")
        .appendField(new Blockly.FieldNumber(45), "DEGREES")
        .appendField("دور التصويرة ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Rotate the image");
    this.setHelpUrl("");
  }
};

// Bloc pour changer la taille
Blockly.Blocks['image_resize'] = {
  init: function() {
    this.appendValueInput("PERCENT")
        .setCheck("Number")
        .appendField("%")
        .appendField(new Blockly.FieldNumber(100), "PERCENT")
        .appendField("بدل كبر التصويرة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Resize the image");
    this.setHelpUrl("");
  }
};

// Bloc pour afficher l'image
Blockly.Blocks['image_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" ظهر التصويرة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Show the uploaded image");
    this.setHelpUrl("");
  }
};

// Bloc pour cacher l'image
Blockly.Blocks['image_hide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" خبي التصويرة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Hide the uploaded image");
    this.setHelpUrl("");
  }
};






Blockly.Blocks['lists_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("جدول");
    this.setOutput(true, "Array");
    this.setColour("#FF661A"); // Couleur de la catégorie Lists
    this.setTooltip("Represents a list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "add thing to list"
Blockly.Blocks['lists_add'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("جدول");
    this.appendDummyInput()
        .appendField("زيد لل");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Add an item to the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "delete 1 of list"
Blockly.Blocks['lists_delete'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("من الجدول")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("فسخ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Delete an item at a specific index from the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "delete all of list"
Blockly.Blocks['lists_delete_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("فسخ جدول كامل");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Delete all items from the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "insert thing at 1 of list"
Blockly.Blocks['lists_insert'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("في الجدول");
    this.appendDummyInput()
        .appendField("ال")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("زيد في");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Insert an item at a specific index in the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "replace item 1 of list with thing"
Blockly.Blocks['lists_replace'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("الى في الجدول");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("بدل العنصر ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Replace an item at a specific index in the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "item 1 of list"
Blockly.Blocks['lists_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("في الجدول")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("العنصر");
    this.setOutput(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Get an item at a specific index from the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "item # of thing in list"
Blockly.Blocks['lists_index_of'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField("في الجدول ");
    this.appendDummyInput()
        .appendField(" # العنصر");
    this.setOutput(true, "Number");
    this.setColour("#FF661A");
    this.setTooltip("Get the index of an item in the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "length of list"
Blockly.Blocks['lists_length'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("طول الجدول");
    this.setOutput(true, "Number");
    this.setColour("#FF661A");
    this.setTooltip("Get the length of the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "list contains thing?"
Blockly.Blocks['lists_contains'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .setCheck(null)
        .appendField(" ؟");
    this.appendDummyInput()
        .appendField(" الجدول فيه");
    this.setOutput(true, "Boolean");
    this.setColour("#FF661A");
    this.setTooltip("Check if the list contains a specific item.");
    this.setHelpUrl("");
  }
};

// Bloc pour "show list"
Blockly.Blocks['lists_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ظهر الجدول");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Show the list.");
    this.setHelpUrl("");
  }
};

// Bloc pour "hide list"
Blockly.Blocks['lists_hide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("خبي الجدول");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF661A");
    this.setTooltip("Hide the list.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_my_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("متغير متاعي")
        .appendField(new Blockly.FieldVariable("item"), "VAR");
        
    this.setOutput(true, null);
    this.setColour("#FF8C1A"); // Couleur de la catégorie Lists
    this.setTooltip("Get the value of a variable.");
    this.setHelpUrl("");
  }
};

// Bloc pour "set my variable to 0"
Blockly.Blocks['lists_set_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("الى")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("تعيين");
    this.appendValueInput("VALUE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Set a variable to a specific value.");
    this.setHelpUrl("");
  }
};

// Bloc pour "change my variable by 1"
Blockly.Blocks['lists_change_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("الى")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("بدل ");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Change the value of a variable by a specified amount.");
    this.setHelpUrl("");
  }
};

// Bloc pour "show variable my variable"
Blockly.Blocks['lists_show_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ظهر المتغير")
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Show the value of a variable.");
    this.setHelpUrl("");
  }
};

// Bloc pour "hide variable my variable"
Blockly.Blocks['lists_hide_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("خبي المتغير")
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FF8C1A");
    this.setTooltip("Hide the value of a variable.");
    this.setHelpUrl("");
  }
};

// Bloc pour "pick random 1 to 10"
Blockly.Blocks['operators_pick_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(1), "FROM")
        .appendField("حتى")
        .appendField(new Blockly.FieldNumber(1), "FROM")
        .appendField("اختار بالزهر رقم من")
       
    this.setOutput(true, "Number");
    this.setColour("#59C059"); // Couleur de la catégorie Operators
    this.setTooltip("Pick a random number between two values.");
    this.setHelpUrl("");
  }
};

// Bloc pour "="
Blockly.Blocks['operators_equals'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("RIGHT")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Check if two values are equal.");
    this.setHelpUrl("");
  }
};

// Bloc pour "and"
Blockly.Blocks['operators_and'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("مع");
    this.appendValueInput("RIGHT")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Logical AND operation.");
    this.setHelpUrl("");
  }
};

// Bloc pour "or"
Blockly.Blocks['operators_or'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("أو");
    this.appendValueInput("RIGHT")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Logical OR operation.");
    this.setHelpUrl("");
  }
};

// Bloc pour "not"
Blockly.Blocks['operators_not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("لا");
    this.appendValueInput("BOOL")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Logical NOT operation.");
    this.setHelpUrl("");
  }
};

// Bloc pour "join apple banana"
Blockly.Blocks['operators_join'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("ينضم");
    this.appendValueInput("RIGHT")
        .setCheck("String");
    this.setOutput(true, "String");
    this.setColour("#59C059");
    this.setTooltip("Join two strings together.");
    this.setHelpUrl("");
  }
};

// Bloc pour "letter 1 of apple"
Blockly.Blocks['operators_letter_of'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("في")
        .appendField(new Blockly.FieldNumber(1, 1), "INDEX")
        .appendField("حرف ");
    this.setOutput(true, "String");
    this.setColour("#59C059");
    this.setTooltip("Get a specific letter from a string.");
    this.setHelpUrl("");
  }
};

// Bloc pour "length of apple"
Blockly.Blocks['operators_length'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("طول متاع");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Get the length of a string.");
    this.setHelpUrl("");
  }
};

// Bloc pour "apple contains a ?"
Blockly.Blocks['operators_contains'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("فيها")
        .appendField(new Blockly.FieldTextInput("a"), "SUBSTRING");
    this.setOutput(true, "Boolean");
    this.setColour("#59C059");
    this.setTooltip("Check if a string contains a substring.");
    this.setHelpUrl("");
  }
};

// Bloc pour "mod"
Blockly.Blocks['operators_mod'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("باقي القسمة");
    this.appendValueInput("RIGHT")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Get the remainder of a division.");
    this.setHelpUrl("");
  }
};

// Bloc pour "round"
Blockly.Blocks['operators_round'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("دائري");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Round a number to the nearest integer.");
    this.setHelpUrl("");
  }
};

// Bloc pour "abs of"
Blockly.Blocks['operators_abs'] = {
  init: function() {
    this.appendValueInput("NUMBER")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("القيمة المطلقة");
    this.setOutput(true, "Number");
    this.setColour("#59C059");
    this.setTooltip("Get the absolute value of a number.");
    this.setHelpUrl("");
  }
};

// Définir les blocs personnalisés pour la catégorie Sensing
Blockly.Blocks['sensing_touching_mouse_pointer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("لمس مؤشر الماوس؟");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the sprite is touching the mouse-pointer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_touching_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("لون مؤثر؟")
        .appendField(new FieldColour("#ff0000"), "COLOR"); // Utilisation correcte
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the sprite is touching a specified color.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_color_is_touching'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("اللون مؤثر؟")
        .appendField(new FieldColour("#ff0000"), "COLOR");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if a specified color is touching another color.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_distance_to_mouse_pointer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("المسافة إلى مؤشر الماوس");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the distance to the mouse-pointer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_ask_and_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("و ستنا")
        .appendField(new Blockly.FieldTextInput("What's your name?"), "QUESTION")
        .appendField("اسأل ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Ask a question and wait for an answer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_answer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("جاوب");
    this.setOutput(true, "String");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the answer to the last question asked.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_key_space_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("تم الضغط على مفتاح المسافة؟");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the space key is pressed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_mouse_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("الفأرة لأسفل؟");
    this.setOutput(true, "Boolean");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Check if the mouse button is pressed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_mouse_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ماوس x");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the x position of the mouse.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_mouse_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" y ماوس ");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the y position of the mouse.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_set_drag_mode_draggable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("تعيين وضع السحب القابل للسحب");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Set the drag mode to draggable.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_loudness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("بريق");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current loudness level.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("مؤقت");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current value of the timer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_reset_timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("إعادة ضبط المؤقت");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Reset the timer to zero.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_backdrop_number_of_stage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("خلفية المسرح");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current backdrop number of the stage.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_current_year'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("السنة الحالية");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the current year.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_days_since_2000'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("أيام منذ عام 2000");
    this.setOutput(true, "Number");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the number of days since the year 2000.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sensing_username'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("اسم المستخدم");
    this.setOutput(true, "String");
    this.setColour("#5CB1D6"); // Couleur de la catégorie Sensing
    this.setTooltip("Get the username of the current user.");
    this.setHelpUrl("");
  }
};




// Définir les blocs personnalisés pour la catégorie Looks
Blockly.Blocks['looks_say_for_seconds'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("قول")
        .appendField(new Blockly.FieldTextInput("Hello!"), "MESSAGE");
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("ثواني")
        .appendField(new Blockly.FieldNumber(2), "SECONDS")
        .appendField("لمدة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a message for a specified number of seconds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_say'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("قول")
        .appendField(new Blockly.FieldTextInput("Hello!"), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a message.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_think_for_seconds'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("فكر")
        .appendField(new Blockly.FieldTextInput("Hmm..."), "MESSAGE");
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("ثواني")
        .appendField(new Blockly.FieldNumber(2), "SECONDS")
        .appendField("لمدة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a thought bubble for a specified number of seconds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_think'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("فكر")
        .appendField(new Blockly.FieldTextInput("Hmm..."), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Display a thought bubble.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_switch_costume_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("تبديل الزي إلى")
        .appendField(new Blockly.FieldDropdown([["costume1", "COSTUME1"], ["costume2", "COSTUME2"]]), "COSTUME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to a specified costume.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_next_costume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("الزي التالي");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to the next costume.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_switch_backdrop_to'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("تبديل الخلفية إلى")
        .appendField(new Blockly.FieldDropdown([["backdrop1", "BACKDROP1"], ["backdrop2", "BACKDROP2"]]), "BACKDROP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to a specified backdrop.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_next_backdrop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("الخلفية التالية");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Switch to the next backdrop.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_change_size_by'] = {
  init: function() {
    this.appendValueInput("SIZE")
        .setCheck("Number")
        .appendField("تغيير الحجم بمقدار ")
        .appendField(new Blockly.FieldNumber(10), "SIZE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Change the size by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_set_size_to'] = {
  init: function() {
    this.appendValueInput("SIZE")
        .setCheck("Number")
        .appendField("%")
        .appendField(new Blockly.FieldNumber(10), "SIZE")
        .appendField(" ضبط الحجم إلى");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Set the size to a specified percentage.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_change_color_effect_by'] = {
  init: function() {
    this.appendValueInput("EFFECT")
        .setCheck("Number")
        .appendField("تغيير تأثير اللون عن طريق")
        .appendField(new Blockly.FieldNumber(25), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Change the color effect by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_set_color_effect_to'] = {
  init: function() {
    this.appendValueInput("EFFECT")
        .setCheck("Number")
        .appendField("ضبط تأثير اللون على")
        .appendField(new Blockly.FieldNumber(25), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Set the color effect to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_clear_graphic_effects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("تأثيرات رسومية واضحة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Clear all graphic effects.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ظهر");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Show the sprite.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_hide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("خبي");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Hide the sprite.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_go_to_front_layer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("انتقل إلى الطبقة الأمامية");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Move the sprite to the front layer.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_go_forward_layers'] = {
  init: function() {
    this.appendValueInput("LAYERS")
        .setCheck("Number")
        .appendField("طبقة")
        .appendField(new Blockly.FieldNumber(1), "LAYERS")
        .appendField("المضي قدما");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Move the sprite forward by a specified number of layers.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_costume_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("رقم الزي");
    this.setOutput(true, "Number");
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Get the current costume number.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_backdrop_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("رقم الخلفية");
    this.setOutput(true, "Number");
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Get the current backdrop number.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['looks_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("مقاس");
    this.setOutput(true, "Number");
    this.setColour("#9966FF"); // Couleur de la catégorie Looks
    this.setTooltip("Get the current size of the sprite.");
    this.setHelpUrl("");
  }
};


// Définir les blocs personnalisés pour la catégorie Control
Blockly.Blocks['control_wait'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("ثواني")
        .appendField(new Blockly.FieldNumber(1), "SECONDS")
        .appendField("استنى");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Wait for a specified number of seconds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_repeat'] = {
  init: function() {
    this.appendValueInput("TIMES")
        .setCheck("Number")
        .appendField("عاود")
        .appendField(new Blockly.FieldNumber(10), "TIMES");
    this.appendStatementInput("DO")
        .appendField("اعمل");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Repeat the enclosed blocks a specified number of times.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_forever'] = {
  init: function() {
    this.appendStatementInput("DO")
        .appendField("ديما");
    this.setPreviousStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Run the enclosed blocks indefinitely.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_if'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("اذا");
    this.appendStatementInput("DO")
        .appendField("فاعمل");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Execute the enclosed blocks if the condition is true.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_if_else'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("اذا");
    this.appendStatementInput("DO")
        .appendField("فاعمل");
    this.appendStatementInput("ELSE")
        .appendField("و الا");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Execute the first set of blocks if the condition is true, otherwise execute the second set.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_wait_until'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("استنى حتى");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Wait until the condition is true.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_repeat_until'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("عاود حتى");
    this.appendStatementInput("DO")
        .appendField("اعمل");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Repeat the enclosed blocks until the condition is true.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_stop_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("وقف الكل");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Stop all scripts.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_when_start_as_clone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("وقت نبدأ كنسخة طبق الأصل");
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Triggered when a clone starts.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_create_clone_of_myself'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("اصنع نسخة من نفسي");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Create a clone of the current sprite.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['control_delete_this_clone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("افسخ هذه النسخة المستنسخة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFAB19"); // Couleur de la catégorie Control
    this.setTooltip("Delete the current clone.");
    this.setHelpUrl("");
  }
};




// Définir les blocs personnalisés pour la catégorie Motor
Blockly.Blocks['motor_move_steps'] = {
  init: function() {
    this.appendValueInput("STEPS")
        .setCheck("Number")
        .appendField("خطوة")
        .appendField(new Blockly.FieldNumber(0), "STEPS")
        .appendField("حرك");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Move the motor by a specified number of steps.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_turn_degrees'] = {
  init: function() {
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField("درجة")
        .appendField(new Blockly.FieldNumber(0), "DEGREES")
        .appendField("دور");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Turn the motor by a specified number of degrees.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_go_to_random_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("امشي الى بلاصة بالزهر");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Move the motor to a random position.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_go_to_xy'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField(": x امشي ")
        .appendField(new Blockly.FieldNumber(0), "X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y:")
        .appendField(new Blockly.FieldNumber(0), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Move the motor to a specified x, y position.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_glide_to_random_position'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("ثانية الى بلاصة بالزهر")
        .appendField(new Blockly.FieldNumber(1), "SECONDS")
        .appendField("انزلق لمدة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Glide the motor to a random position in a specified time.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_glide_to_xy'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField(": x ثانية الى  ")

        .appendField(new Blockly.FieldNumber(1), "SECONDS")
        .appendField(" انزلق لمدة");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField(new Blockly.FieldNumber(0), "X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y:")
        .appendField(new Blockly.FieldNumber(0), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Glide the motor to a specified x, y position in a specified time.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_point_in_direction'] = {
  init: function() {
    this.appendValueInput("DIRECTION")
        .setCheck("Number")
        .appendField("نقطة في الاتجاه")
        .appendField(new Blockly.FieldNumber(90), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Point the motor in a specified direction.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_point_towards'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("اشير نحو")
        .appendField(new Blockly.FieldDropdown([["Mouse-pointer", "MOUSE_POINTER"]]), "TARGET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Point the motor towards a target.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_change_x_by'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("x بدل")
        .appendField(new Blockly.FieldNumber(10), "X");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Change the x position of the motor by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_x_to'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("x حط")
        .appendField(new Blockly.FieldNumber(10), "X");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Set the x position of the motor to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_change_y_by'] = {
  init: function() {
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y بدل")
        .appendField(new Blockly.FieldNumber(10), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Change the y position of the motor by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_y_to'] = {
  init: function() {
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y حط")
        .appendField(new Blockly.FieldNumber(10), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Set the y position of the motor to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_if_on_edge_bounce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("إذا كنت على الحافة، ارتد");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("If the motor is on the edge, bounce.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_set_rotation_style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("تعيين نمط الدوران")
        .appendField(new Blockly.FieldDropdown([["Left-right", "LEFT_RIGHT"]]), "STYLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Set the rotation style of the motor.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_x_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x بلاصة    ");
    this.setOutput(true, "Number");
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Get the x position of the motor.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_y_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" y بلاصة ");
    this.setOutput(true, "Number");
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Get the y position of the motor.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("اتجاه");
    this.setOutput(true, "Number");
    this.setColour("#4C97FF"); // Couleur de la catégorie Motors
    this.setTooltip("Get the direction of the motor.");
    this.setHelpUrl("");
  }
};

// Définir les blocs personnalisés pour la catégorie Events
Blockly.Blocks['event_when_clicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("حدث عند النقر عليه  ");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when the sprite is clicked.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_space_key_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("وقت تنزل على مفتاح المسافة");
    this.setNextStatement(true, null);
    this.setColour("#FFC909");
 // Couleur de la catégorie Events
    this.setTooltip("Triggered when the space key is pressed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_this_sprite_clicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("عندما تم النقر على هذا العفريت");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when this specific sprite is clicked.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_backdrop_switches'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("عندما يتم تبديل الخلفية إلى")
        .appendField(new Blockly.FieldDropdown([["backdrop1", "BACKDROP1"]]), "BACKDROP");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when the backdrop switches to a specified one.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_loudness_greater_than'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("< عندما يكون الصوت مرتفعا ")
        .appendField(new Blockly.FieldNumber(10), "LOUDNESS");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when the loudness is greater than a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_when_receive_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("عندما أتلقى")
        .appendField(new Blockly.FieldDropdown([["message1", "MESSAGE1"]]), "MESSAGE");
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Triggered when a specified message is received.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_broadcast_message'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("إذاعة")
        .appendField(new Blockly.FieldDropdown([["message1", "MESSAGE1"]]), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Broadcast a specified message.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['event_broadcast_message_and_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("والانتظار")
        .appendField(new Blockly.FieldDropdown([["message1", "MESSAGE1"]]), "MESSAGE")
        .appendField("البث ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#FFC909"); // Couleur de la catégorie Events
    this.setTooltip("Broadcast a specified message and wait until it is handled.");
    this.setHelpUrl("");
  }
};

// Définir les blocs personnalisés pour la catégorie Sound
Blockly.Blocks['sound_play_until_done'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("تشغيل الصوت حتى الانتهاء")
        .appendField(new Blockly.FieldDropdown([["sound1", "SOUND1"]]), "SOUND");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Play a sound until it finishes.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_start_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("صوت البداية")
        .appendField(new Blockly.FieldDropdown([["sound1", "SOUND1"]]), "SOUND");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Start playing a sound.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_stop_all_sounds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("إيقاف جميع الأصوات");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Stop all currently playing sounds.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_change_pitch_effect_by'] = {
  init: function() {
    this.appendValueInput("PITCH")
        .setCheck("Number")
        .appendField("تغيير تأثير النغمة بواسطة")
        .appendField(new Blockly.FieldNumber(10), "PITCH");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Change the pitch effect by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_set_pitch_effect_to'] = {
  init: function() {
    this.appendValueInput("PITCH")
        .setCheck("Number")
        .appendField("ضبط تأثير النغمة على")
        .appendField(new Blockly.FieldNumber(10), "PITCH");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Set the pitch effect to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_clear_sound_effects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("مؤثرات صوتية واضحة");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Clear all sound effects.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_change_volume_by'] = {
  init: function() {
    this.appendValueInput("VOLUME")
        .setCheck("Number")
        .appendField("تغيير مستوى الصوت بواسطة")
        .appendField(new Blockly.FieldNumber(-10), "VOLUME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Change the volume by a specified amount.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_set_volume_to'] = {
  init: function() {
    this.appendValueInput("VOLUME")
        .setCheck("Number")
        .appendField("ضبط مستوى الصوت على")
        .appendField(new Blockly.FieldNumber(-10), "VOLUME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Set the volume to a specified value.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sound_volume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("مقدار");
    this.setOutput(true, "Number");
    this.setColour("#CF63CF"); // Couleur de la catégorie Sound
    this.setTooltip("Get the current volume.");
    this.setHelpUrl("");
  }
};


// Définir les générateurs de code pour les blocs Motor
javascriptGenerator.forBlock['motor_move_steps'] = function(block, generator) {
  const steps = block.getFieldValue('STEPS');
  return `moveSteps(${steps});\n`;
};

javascriptGenerator.forBlock['motor_turn_degrees'] = function(block, generator) {
  const degrees = block.getFieldValue('DEGREES');
  return `turnDegrees(${degrees});\n`;
};

javascriptGenerator.forBlock['motor_go_to_random_position'] = function(block, generator) {
  return `goToRandomPosition();\n`;
};

javascriptGenerator.forBlock['motor_go_to_xy'] = function(block, generator) {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  return `goToXY(${x}, ${y});\n`;
};

javascriptGenerator.forBlock['motor_glide_to_random_position'] = function(block, generator) {
  const seconds = block.getFieldValue('SECONDS');
  return `glideToRandomPosition(${seconds});\n`;
};

javascriptGenerator.forBlock['motor_glide_to_xy'] = function(block, generator) {
  const seconds = block.getFieldValue('SECONDS');
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  return `glideToXY(${seconds}, ${x}, ${y});\n`;
};

javascriptGenerator.forBlock['motor_point_in_direction'] = function(block, generator) {
  const direction = block.getFieldValue('DIRECTION');
  return `pointInDirection(${direction});\n`;
};

javascriptGenerator.forBlock['motor_point_towards'] = function(block, generator) {
  const target = block.getFieldValue('TARGET');
  return `pointTowards(${target});\n`;
};

javascriptGenerator.forBlock['motor_change_x_by'] = function(block, generator) {
  const x = block.getFieldValue('X');
  return `changeXBy(${x});\n`;
};

javascriptGenerator.forBlock['motor_set_x_to'] = function(block, generator) {
  const x = block.getFieldValue('X');
  return `setXTo(${x});\n`;
};

javascriptGenerator.forBlock['motor_change_y_by'] = function(block, generator) {
  const y = block.getFieldValue('Y');
  return `changeYBy(${y});\n`;
};

javascriptGenerator.forBlock['motor_set_y_to'] = function(block, generator) {
  const y = block.getFieldValue('Y');
  return `setYTo(${y});\n`;
};

javascriptGenerator.forBlock['motor_if_on_edge_bounce'] = function(block, generator) {
  return `ifOnEdgeBounce();\n`;
};

javascriptGenerator.forBlock['motor_set_rotation_style'] = function(block, generator) {
  const style = block.getFieldValue('STYLE');
  return `setRotationStyle(${style});\n`;
};

javascriptGenerator.forBlock['motor_x_position'] = function(block, generator) {
  return [`xPosition()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['motor_y_position'] = function(block, generator) {
  return [`yPosition()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['motor_direction'] = function(block, generator) {
  return [`direction()`, javascriptGenerator.ORDER_ATOMIC];
};

// Définir les générateurs de code pour les blocs Events
javascriptGenerator.forBlock['event_when_clicked'] = function(block, generator) {
  return `whenClicked();\n`;
};

javascriptGenerator.forBlock['event_when_space_key_pressed'] = function(block, generator) {
  return `whenSpaceKeyPressed();\n`;
};

javascriptGenerator.forBlock['event_when_this_sprite_clicked'] = function(block, generator) {
  return `whenThisSpriteClicked();\n`;
};

javascriptGenerator.forBlock['event_when_backdrop_switches'] = function(block, generator) {
  const backdrop = block.getFieldValue('BACKDROP');
  return `whenBackdropSwitchesTo("${backdrop}");\n`;
};

javascriptGenerator.forBlock['event_when_loudness_greater_than'] = function(block, generator) {
  const loudness = block.getFieldValue('LOUDNESS');
  return `whenLoudnessGreaterThan(${loudness});\n`;
};

javascriptGenerator.forBlock['event_when_receive_message'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `whenReceiveMessage("${message}");\n`;
};

javascriptGenerator.forBlock['event_broadcast_message'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `broadcastMessage("${message}");\n`;
};

javascriptGenerator.forBlock['event_broadcast_message_and_wait'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `broadcastMessageAndWait("${message}");\n`;
};

// Définir les générateurs de code pour les blocs Sound
javascriptGenerator.forBlock['sound_play_until_done'] = function(block, generator) {
  const sound = block.getFieldValue('SOUND');
  return `playSoundUntilDone("${sound}");\n`;
};

javascriptGenerator.forBlock['sound_start_sound'] = function(block, generator) {
  const sound = block.getFieldValue('SOUND');
  return `startSound("${sound}");\n`;
};

javascriptGenerator.forBlock['sound_stop_all_sounds'] = function(block, generator) {
  return `stopAllSounds();\n`;
};

javascriptGenerator.forBlock['sound_change_pitch_effect_by'] = function(block, generator) {
  const pitch = block.getFieldValue('PITCH');
  return `changePitchEffectBy(${pitch});\n`;
};

javascriptGenerator.forBlock['sound_set_pitch_effect_to'] = function(block, generator) {
  const pitch = block.getFieldValue('PITCH');
  return `setPitchEffectTo(${pitch});\n`;
};

javascriptGenerator.forBlock['sound_clear_sound_effects'] = function(block, generator) {
  return `clearSoundEffects();\n`;
};

javascriptGenerator.forBlock['sound_change_volume_by'] = function(block, generator) {
  const volume = block.getFieldValue('VOLUME');
  return `changeVolumeBy(${volume});\n`;
};

javascriptGenerator.forBlock['sound_set_volume_to'] = function(block, generator) {
  const volume = block.getFieldValue('VOLUME');
  return `setVolumeTo(${volume});\n`;
};

javascriptGenerator.forBlock['sound_volume'] = function(block, generator) {
  return [`volume()`, javascriptGenerator.ORDER_ATOMIC];
};
// Définir les générateurs de code pour les blocs Control
javascriptGenerator.forBlock['control_wait'] = function(block, generator) {
  const seconds = generator.valueToCode(block, 'SECONDS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `wait(${seconds});\n`;
};

javascriptGenerator.forBlock['control_repeat'] = function(block, generator) {
  const times = generator.valueToCode(block, 'TIMES', javascriptGenerator.ORDER_ATOMIC) || 0;
  const doCode = generator.statementToCode(block, 'DO');
  return `for (let i = 0; i < ${times}; i++) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_forever'] = function(block, generator) {
  const doCode = generator.statementToCode(block, 'DO');
  return `while (true) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_if'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  const doCode = generator.statementToCode(block, 'DO');
  return `if (${condition}) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_if_else'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  const doCode = generator.statementToCode(block, 'DO');
  const elseCode = generator.statementToCode(block, 'ELSE');
  return `if (${condition}) {\n${doCode}} else {\n${elseCode}}\n`;
};

javascriptGenerator.forBlock['control_wait_until'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  return `while (!(${condition})) {}\n`;
};

javascriptGenerator.forBlock['control_repeat_until'] = function(block, generator) {
  const condition = generator.valueToCode(block, 'CONDITION', javascriptGenerator.ORDER_ATOMIC) || 'false';
  const doCode = generator.statementToCode(block, 'DO');
  return `while (!(${condition})) {\n${doCode}}\n`;
};

javascriptGenerator.forBlock['control_stop_all'] = function(block, generator) {
  return `stopAll();\n`;
};

javascriptGenerator.forBlock['control_when_start_as_clone'] = function(block, generator) {
  return `whenStartAsClone();\n`;
};

javascriptGenerator.forBlock['control_create_clone_of_myself'] = function(block, generator) {
  return `createCloneOfMyself();\n`;
};

javascriptGenerator.forBlock['control_delete_this_clone'] = function(block, generator) {
  return `deleteThisClone();\n`;
};

// Définir les générateurs de code pour les blocs Looks
javascriptGenerator.forBlock['looks_say_for_seconds'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  const seconds = generator.valueToCode(block, 'SECONDS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `sayForSeconds("${message}", ${seconds});\n`;
};

javascriptGenerator.forBlock['looks_say'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `say("${message}");\n`;
};

javascriptGenerator.forBlock['looks_think_for_seconds'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  const seconds = generator.valueToCode(block, 'SECONDS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `thinkForSeconds("${message}", ${seconds});\n`;
};

javascriptGenerator.forBlock['looks_think'] = function(block, generator) {
  const message = block.getFieldValue('MESSAGE');
  return `think("${message}");\n`;
};

javascriptGenerator.forBlock['looks_switch_costume_to'] = function(block, generator) {
  const costume = block.getFieldValue('COSTUME');
  return `switchCostumeTo("${costume}");\n`;
};

javascriptGenerator.forBlock['looks_next_costume'] = function(block, generator) {
  return `nextCostume();\n`;
};

javascriptGenerator.forBlock['looks_switch_backdrop_to'] = function(block, generator) {
  const backdrop = block.getFieldValue('BACKDROP');
  return `switchBackdropTo("${backdrop}");\n`;
};

javascriptGenerator.forBlock['looks_next_backdrop'] = function(block, generator) {
  return `nextBackdrop();\n`;
};

javascriptGenerator.forBlock['looks_change_size_by'] = function(block, generator) {
  const size = generator.valueToCode(block, 'SIZE', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `changeSizeBy(${size});\n`;
};

javascriptGenerator.forBlock['looks_set_size_to'] = function(block, generator) {
  const size = generator.valueToCode(block, 'SIZE', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `setSizeTo(${size});\n`;
};

javascriptGenerator.forBlock['looks_change_color_effect_by'] = function(block, generator) {
  const effect = generator.valueToCode(block, 'EFFECT', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `changeColorEffectBy(${effect});\n`;
};

javascriptGenerator.forBlock['looks_set_color_effect_to'] = function(block, generator) {
  const effect = generator.valueToCode(block, 'EFFECT', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `setColorEffectTo(${effect});\n`;
};

javascriptGenerator.forBlock['looks_clear_graphic_effects'] = function(block, generator) {
  return `clearGraphicEffects();\n`;
};

javascriptGenerator.forBlock['looks_show'] = function(block, generator) {
  return `show();\n`;
};

javascriptGenerator.forBlock['looks_hide'] = function(block, generator) {
  return `hide();\n`;
};

javascriptGenerator.forBlock['looks_go_to_front_layer'] = function(block, generator) {
  return `goToFrontLayer();\n`;
};

javascriptGenerator.forBlock['looks_go_forward_layers'] = function(block, generator) {
  const layers = generator.valueToCode(block, 'LAYERS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `goForwardLayers(${layers});\n`;
};

javascriptGenerator.forBlock['looks_costume_number'] = function(block, generator) {
  return [`costumeNumber()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['looks_backdrop_number'] = function(block, generator) {
  return [`backdropNumber()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['looks_size'] = function(block, generator) {
  return [`size()`, javascriptGenerator.ORDER_ATOMIC];
};

// Définir les générateurs de code pour les blocs Sensing
javascriptGenerator.forBlock['sensing_touching_mouse_pointer'] = function(block, generator) {
  return [`touchingMousePointer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_touching_color'] = function(block, generator) {
  const color = block.getFieldValue('COLOR');
  return [`touchingColor("${color}")`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_color_is_touching'] = function(block, generator) {
  const color = block.getFieldValue('COLOR');
  return [`colorIsTouching("${color}")`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_distance_to_mouse_pointer'] = function(block, generator) {
  return [`distanceToMousePointer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_ask_and_wait'] = function(block, generator) {
  const question = block.getFieldValue('QUESTION');
  return `askAndWait("${question}");\n`;
};

javascriptGenerator.forBlock['sensing_answer'] = function(block, generator) {
  return [`answer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_key_space_pressed'] = function(block, generator) {
  return [`keySpacePressed()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_mouse_down'] = function(block, generator) {
  return [`mouseDown()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_mouse_x'] = function(block, generator) {
  return [`mouseX()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_mouse_y'] = function(block, generator) {
  return [`mouseY()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_set_drag_mode_draggable'] = function(block, generator) {
  return `setDragModeDraggable();\n`;
};

javascriptGenerator.forBlock['sensing_loudness'] = function(block, generator) {
  return [`loudness()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_timer'] = function(block, generator) {
  return [`timer()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_reset_timer'] = function(block, generator) {
  return `resetTimer();\n`;
};

javascriptGenerator.forBlock['sensing_backdrop_number_of_stage'] = function(block, generator) {
  return [`backdropNumberOfStage()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_current_year'] = function(block, generator) {
  return [`currentYear()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_days_since_2000'] = function(block, generator) {
  return [`daysSince2000()`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['sensing_username'] = function(block, generator) {
  return [`username()`, javascriptGenerator.ORDER_ATOMIC];
};
javascriptGenerator.forBlock['operators_pick_random'] = function(block, generator) {
  const from = block.getFieldValue('FROM');
  const to = block.getFieldValue('TO');
  return [`Math.floor(Math.random() * (${to} - ${from} + 1)) + ${from}`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['operators_equals'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_EQUALITY) || '0';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_EQUALITY) || '0';
  return [`${left} === ${right}`, javascriptGenerator.ORDER_EQUALITY];
};

javascriptGenerator.forBlock['operators_and'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_LOGICAL_AND) || 'false';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_LOGICAL_AND) || 'false';
  return [`${left} && ${right}`, javascriptGenerator.ORDER_LOGICAL_AND];
};

javascriptGenerator.forBlock['operators_or'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_LOGICAL_OR) || 'false';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_LOGICAL_OR) || 'false';
  return [`${left} || ${right}`, javascriptGenerator.ORDER_LOGICAL_OR];
};

javascriptGenerator.forBlock['operators_not'] = function(block, generator) {
  const bool = generator.valueToCode(block, 'BOOL', javascriptGenerator.ORDER_LOGICAL_NOT) || 'false';
  return [`!${bool}`, javascriptGenerator.ORDER_LOGICAL_NOT];
};

javascriptGenerator.forBlock['operators_join'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_ADDITION) || '""';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_ADDITION) || '""';
  return [`${left} + ${right}`, javascriptGenerator.ORDER_ADDITION];
};

javascriptGenerator.forBlock['operators_letter_of'] = function(block, generator) {
  const str = generator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_MEMBER) || '""';
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return [`${str}.charAt(${index})`, javascriptGenerator.ORDER_MEMBER];
};

javascriptGenerator.forBlock['operators_length'] = function(block, generator) {
  const str = generator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_MEMBER) || '""';
  return [`${str}.length`, javascriptGenerator.ORDER_MEMBER];
};

javascriptGenerator.forBlock['operators_contains'] = function(block, generator) {
  const str = generator.valueToCode(block, 'STRING', javascriptGenerator.ORDER_RELATIONAL) || '""';
  const substring = block.getFieldValue('SUBSTRING');
  return [`${str}.includes("${substring}")`, javascriptGenerator.ORDER_RELATIONAL];
};

javascriptGenerator.forBlock['operators_mod'] = function(block, generator) {
  const left = generator.valueToCode(block, 'LEFT', javascriptGenerator.ORDER_MODULUS) || '0';
  const right = generator.valueToCode(block, 'RIGHT', javascriptGenerator.ORDER_MODULUS) || '1';
  return [`${left} % ${right}`, javascriptGenerator.ORDER_MODULUS];
};

javascriptGenerator.forBlock['operators_round'] = function(block, generator) {
  const number = generator.valueToCode(block, 'NUMBER', javascriptGenerator.ORDER_FUNCTION_CALL) || '0';
  return [`Math.round(${number})`, javascriptGenerator.ORDER_FUNCTION_CALL];
};

javascriptGenerator.forBlock['operators_abs'] = function(block, generator) {
  const number = generator.valueToCode(block, 'NUMBER', javascriptGenerator.ORDER_FUNCTION_CALL) || '0';
  return [`Math.abs(${number})`, javascriptGenerator.ORDER_FUNCTION_CALL];
};
javascriptGenerator.forBlock['lists_my_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return [variable, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_set_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = generator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ASSIGNMENT) || '0';
  return `${variable} = ${value};\n`;
};

javascriptGenerator.forBlock['lists_change_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  const value = generator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ADDITION) || '0';
  return `${variable} += ${value};\n`;
};

javascriptGenerator.forBlock['lists_show_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return `console.log(${variable});\n`; // Affiche la variable dans la console
};

javascriptGenerator.forBlock['lists_hide_variable'] = function(block, generator) {
  const variable = generator.nameDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return `// Hide ${variable} (no action needed in JavaScript)\n`; // Aucune action nécessaire pour "cacher" en JavaScript
};
javascriptGenerator.forBlock['lists_list'] = function(block, generator) {
  return ['[]', javascriptGenerator.ORDER_ATOMIC]; // Représente une liste vide
};

javascriptGenerator.forBlock['lists_add'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ADDITION) || 'null';
  return `list.push(${item});\n`;
};

javascriptGenerator.forBlock['lists_delete'] = function(block, generator) {
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return `list.splice(${index}, 1);\n`;
};

javascriptGenerator.forBlock['lists_delete_all'] = function(block, generator) {
  return `list = [];\n`;
};

javascriptGenerator.forBlock['lists_insert'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ADDITION) || 'null';
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return `list.splice(${index}, 0, ${item});\n`;
};

javascriptGenerator.forBlock['lists_replace'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_ADDITION) || 'null';
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return `list[${index}] = ${item};\n`;
};

javascriptGenerator.forBlock['lists_get'] = function(block, generator) {
  const index = block.getFieldValue('INDEX') - 1; // Les indices commencent à 0 en JavaScript
  return [`list[${index}]`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_index_of'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_RELATIONAL) || 'null';
  return [`list.indexOf(${item})`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_length'] = function(block, generator) {
  return [`list.length`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_contains'] = function(block, generator) {
  const item = generator.valueToCode(block, 'ITEM', javascriptGenerator.ORDER_RELATIONAL) || 'null';
  return [`list.includes(${item})`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock['lists_show'] = function(block, generator) {
  return `console.log(list);\n`; // Affiche la liste dans la console
};

javascriptGenerator.forBlock['lists_hide'] = function(block, generator) {
  return `// Hide list (no action needed in JavaScript)\n`; // Aucune action nécessaire pour "cacher" en JavaScript
};
javascriptGenerator.forBlock['image_move'] = function(block, generator) {
  const steps = generator.valueToCode(block, 'STEPS', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `moveSteps(${steps});\n`;
};

javascriptGenerator.forBlock['image_rotate'] = function(block, generator) {
  const degrees = generator.valueToCode(block, 'DEGREES', javascriptGenerator.ORDER_ATOMIC) || 0;
  return `turnDegrees(${degrees});\n`;
};

javascriptGenerator.forBlock['image_resize'] = function(block, generator) {
  const percent = generator.valueToCode(block, 'PERCENT', javascriptGenerator.ORDER_ATOMIC) || 100;
  return `setSizeTo(${percent});\n`;
};

javascriptGenerator.forBlock['image_show'] = function(block, generator) {
  return `displayUploadedImage();\n`;
};

javascriptGenerator.forBlock['image_hide'] = function(block, generator) {
  return `hideImage();\n`;
};
const categories = [
  { 
    name: 'Motor', 
    color: '#4C97FF', 
    icon: '🚗',
    blocks: [
      'motor_move_steps', 'motor_turn_degrees', 'motor_go_to_random_position',
      'motor_go_to_xy', 'motor_glide_to_random_position', 'motor_glide_to_xy',
      'motor_point_in_direction', 'motor_point_towards', 'motor_change_x_by',
      'motor_set_x_to', 'motor_change_y_by', 'motor_set_y_to',
      'motor_if_on_edge_bounce', 'motor_set_rotation_style', 'motor_x_position',
      'motor_y_position', 'motor_direction'
    ]
  },
  { 
    name: 'Events', 
    color: '#FFC909', 
    icon: '🎉',
    blocks: [
      'event_when_clicked', 'event_when_space_key_pressed',
      'event_when_this_sprite_clicked', 'event_when_backdrop_switches',
      'event_when_loudness_greater_than', 'event_when_receive_message',
      'event_broadcast_message', 'event_broadcast_message_and_wait'
    ]
  },
  { 
    name: 'Sound', 
    color: '#CF63CF', 
    icon: '🎵',
    blocks: [
      'sound_play_until_done', 'sound_start_sound', 'sound_stop_all_sounds',
      'sound_change_pitch_effect_by', 'sound_set_pitch_effect_to',
      'sound_clear_sound_effects', 'sound_change_volume_by',
      'sound_set_volume_to', 'sound_volume'
    ]
  },
  { 
    name: 'Control', 
    color: '#FFAB19', 
    icon: '🎮',
    blocks: [
      'control_wait', 'control_repeat', 'control_forever',
      'control_if', 'control_if_else', 'control_wait_until',
      'control_repeat_until', 'control_stop_all',
      'control_when_start_as_clone', 'control_create_clone_of_myself',
      'control_delete_this_clone'
    ]
  },
  { 
    name: 'Looks', 
    color: '#9966FF', 
    icon: '👀',
    blocks: [
      'looks_say_for_seconds', 'looks_say', 'looks_think_for_seconds',
      'looks_think', 'looks_switch_costume_to', 'looks_next_costume',
      'looks_switch_backdrop_to', 'looks_next_backdrop',
      'looks_change_size_by', 'looks_set_size_to',
      'looks_change_color_effect_by', 'looks_set_color_effect_to',
      'looks_clear_graphic_effects', 'looks_show', 'looks_hide',
      'looks_go_to_front_layer', 'looks_go_forward_layers',
      'looks_costume_number', 'looks_backdrop_number', 'looks_size'
    ]
  },
  { 
    name: 'Sensing', 
    color: '#5CB1D6', 
    icon: '📡',
    blocks: [
      'sensing_touching_mouse_pointer', 'sensing_touching_color',
      'sensing_color_is_touching', 'sensing_distance_to_mouse_pointer',
      'sensing_ask_and_wait', 'sensing_answer', 'sensing_key_space_pressed',
      'sensing_mouse_down', 'sensing_mouse_x', 'sensing_mouse_y',
      'sensing_set_drag_mode_draggable', 'sensing_loudness',
      'sensing_timer', 'sensing_reset_timer',
      'sensing_backdrop_number_of_stage', 'sensing_current_year',
      'sensing_days_since_2000', 'sensing_username'
    ]
  },
  { 
    name: 'Operators', 
    color: '#59C059', 
    icon: '➕',
    blocks: [
      'operators_pick_random', 'operators_equals', 'operators_and',
      'operators_or', 'operators_not', 'operators_join',
      'operators_letter_of', 'operators_length', 'operators_contains',
      'operators_mod', 'operators_round', 'operators_abs'
    ]
  },
  { 
    name: 'Variables', 
    color: '#FF8C1A', 
    icon: '📊',
    blocks: [
      'lists_my_variable', 'lists_set_variable', 'lists_change_variable',
      'lists_show_variable', 'lists_hide_variable'
    ]
  },
  { 
    name: 'Lists', 
    color: '#FF661A', 
    icon: '📜',
    blocks: [
      'lists_list', 'lists_add', 'lists_delete', 'lists_delete_all',
      'lists_insert', 'lists_replace', 'lists_get', 'lists_index_of',
      'lists_length', 'lists_contains', 'lists_show', 'lists_hide'
    ]
  },
  { 
    name: 'Image', 
    color: '#FF661A', 
    icon: '🖼️',
    blocks: [
      'image_move', 'image_rotate', 'image_resize',
      'image_show', 'image_hide'
    ]
  }

];


const BlocklyComponent = () => {
  const blocklyDiv = useRef(null);
  const workspaceRef = useRef(null);
  const [generatedCode, setGeneratedCode] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  const [imageStyle, setImageStyle] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [workspaceInitialized, setWorkspaceInitialized] = useState(false);

  const generateInitialToolbox = () => {
    return `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        ${categories.map(category => `
          <category name="${category.name}" colour="${category.color}">
            ${category.blocks.map(blockType => `
              <block type="${blockType}"></block>
            `).join('')}
          </category>
        `).join('')}
      </xml>
    `;
  };

  const handleRunCode = () => {
    try {
      if (!workspaceRef.current || !workspaceInitialized) {
        throw new Error('Workspace not initialized');
      }

      // Your existing run code implementation...
      const code = javascriptGenerator.workspaceToCode(workspaceRef.current);
      setGeneratedCode(code);
      // Créez un contexte d'exécution avec les fonctions disponibles
      const context = {
        // Variables globales
        variables: {},
        lists: {},
        costumes: ['costume1', 'costume2'],
        backdrops: ['backdrop1', 'backdrop2'],
        sounds: ['sound1'],
        messages: ['message1'],
        currentCostume: 0,
        currentBackdrop: 0,
        timer: Date.now(),
        volume: 100,
        rotationStyle: 'all around',
        mouseX: 0,
        mouseY: 0,
        mouseDown: false,
        keyPressed: {},
        answer: '',
        loudness: 0,
        clones: [],
  
        // Fonctions pour manipuler l'image
        moveSteps: (steps) => {
          setImageStyle(prev => ({ 
            ...prev,
            transform: `translateX(${steps}px) ${prev.transform || ''}`.trim()
          }));
        },
        turnDegrees: (degrees) => {
          setImageStyle(prev => ({
            ...prev,
            transform: `${prev.transform || ''} rotate(${degrees}deg)`.trim()
          }));
        },
        changeSizeBy: (percent) => {
          setImageStyle(prev => ({
            ...prev,
            width: `${(parseFloat(prev.width || '100')) + percent}%`
          }));
        },
        setSizeTo: (percent) => {
          setImageStyle(prev => ({
            ...prev,
            width: `${percent}%`
          }));
        },
        displayUploadedImage: () => {
          if (imageRef.current) {
            imageRef.current.style.display = 'block';
          }
        },
        hideImage: () => {
          if (imageRef.current) {
            imageRef.current.style.display = 'none';
          }
        },
  
        // Fonctions pour les listes
        createList: (name) => {
          context.lists[name] = [];
          return context.lists[name];
        },
        addToList: (listName, item) => {
          if (!context.lists[listName]) {
            context.lists[listName] = [];
          }
          context.lists[listName].push(item);
        },
        deleteFromList: (listName, index) => {
          if (context.lists[listName] && index >= 1 && index <= context.lists[listName].length) {
            context.lists[listName].splice(index - 1, 1);
          }
        },
        deleteAllFromList: (listName) => {
          if (context.lists[listName]) {
            context.lists[listName] = [];
          }
        },
        insertInList: (listName, index, item) => {
          if (context.lists[listName] && index >= 1 && index <= context.lists[listName].length + 1) {
            context.lists[listName].splice(index - 1, 0, item);
          }
        },
        replaceInList: (listName, index, item) => {
          if (context.lists[listName] && index >= 1 && index <= context.lists[listName].length) {
            context.lists[listName][index - 1] = item;
          }
        },
        getFromList: (listName, index) => {
          if (context.lists[listName] && index >= 1 && index <= context.lists[listName].length) {
            return context.lists[listName][index - 1];
          }
          return null;
        },
        listContains: (listName, item) => {
          if (context.lists[listName]) {
            return context.lists[listName].includes(item);
          }
          return false;
        },
        listLength: (listName) => {
          if (context.lists[listName]) {
            return context.lists[listName].length;
          }
          return 0;
        },
        indexInList: (listName, item) => {
          if (context.lists[listName]) {
            const index = context.lists[listName].indexOf(item);
            return index >= 0 ? index + 1 : 0;
          }
          return 0;
        },
  
        // Fonctions pour les variables
        setVariable: (name, value) => {
          context.variables[name] = value;
        },
        changeVariable: (name, delta) => {
          if (typeof context.variables[name] === 'number') {
            context.variables[name] += delta;
          } else {
            context.variables[name] = delta;
          }
        },
        getVariable: (name) => {
          return context.variables[name] || 0;
        },
  
        // Fonctions pour les opérateurs
        pickRandom: (from, to) => {
          return Math.floor(Math.random() * (to - from + 1)) + from;
        },
        equals: (a, b) => a === b,
        and: (a, b) => a && b,
        or: (a, b) => a || b,
        not: (a) => !a,
        joinStrings: (a, b) => String(a) + String(b),
        letterOf: (str, index) => {
          str = String(str);
          return index >= 1 && index <= str.length ? str.charAt(index - 1) : '';
        },
        length: (str) => String(str).length,
        contains: (str, substr) => String(str).includes(String(substr)),
        mod: (a, b) => a % b,
        round: (num) => Math.round(num),
        abs: (num) => Math.abs(num),
  
        // Fonctions pour le sensing
        touchingMousePointer: () => {
          // Implémentation simplifiée
          const rect = imageRef.current?.getBoundingClientRect();
          if (!rect) return false;
          return (
            context.mouseX >= rect.left &&
            context.mouseX <= rect.right &&
            context.mouseY >= rect.top &&
            context.mouseY <= rect.bottom
          );
        },
        touchingColor: (color) => {
          // Implémentation simplifiée
          return false;
        },
        colorIsTouching: (color) => {
          // Implémentation simplifiée
          return false;
        },
        distanceToMousePointer: () => {
          const rect = imageRef.current?.getBoundingClientRect();
          if (!rect) return 0;
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          return Math.sqrt(
            Math.pow(context.mouseX - centerX, 2) + 
            Math.pow(context.mouseY - centerY, 2)
          );
        },
        askAndWait: (question) => {
          context.answer = prompt(question) || '';
        },
        getAnswer: () => context.answer,
        isKeyPressed: (key) => context.keyPressed[key] || false,
        isMouseDown: () => context.mouseDown,
        getMouseX: () => context.mouseX,
        getMouseY: () => context.mouseY,
        setDragMode: (mode) => {
          // Implémentation simplifiée
          imageRef.current.style.cursor = mode === 'draggable' ? 'move' : 'default';
        },
        getLoudness: () => context.loudness,
        getTimer: () => (Date.now() - context.timer) / 1000,
        resetTimer: () => {
          context.timer = Date.now();
        },
        getBackdropNumber: () => context.currentBackdrop + 1,
        getCurrentYear: () => new Date().getFullYear(),
        getDaysSince2000: () => Math.floor((Date.now() - new Date('2000-01-01').getTime()) / (1000 * 60 * 60 * 24)),
        getUsername: () => 'User',
  
        // Fonctions pour les looks
        say: (message, seconds) => {
          setSpeechBubble({ message, visible: true });
          if (seconds) {
            setTimeout(() => {
              setSpeechBubble(prev => ({ ...prev, visible: false }));
            }, seconds * 1000);
          }
        },
        think: (message, seconds) => {
          setThoughtBubble({ message, visible: true });
          if (seconds) {
            setTimeout(() => {
              setThoughtBubble(prev => ({ ...prev, visible: false }));
            }, seconds * 1000);
          }
        },
        switchCostume: (costume) => {
          const index = context.costumes.indexOf(costume);
          if (index >= 0) {
            context.currentCostume = index;
            // Mettre à jour l'image si nécessaire
          }
        },
        nextCostume: () => {
          context.currentCostume = (context.currentCostume + 1) % context.costumes.length;
        },
        switchBackdrop: (backdrop) => {
          const index = context.backdrops.indexOf(backdrop);
          if (index >= 0) {
            context.currentBackdrop = index;
          }
        },
        nextBackdrop: () => {
          context.currentBackdrop = (context.currentBackdrop + 1) % context.backdrops.length;
        },
        changeColorEffectBy: (value) => {
          setImageStyle(prev => ({
            ...prev,
            filter: `hue-rotate(${value}deg) ${prev.filter || ''}`
          }));
        },
        setColorEffectTo: (value) => {
          setImageStyle(prev => ({
            ...prev,
            filter: `hue-rotate(${value}deg)`
          }));
        },
        clearGraphicEffects: () => {
          setImageStyle(prev => ({
            ...prev,
            filter: 'none'
          }));
        },
        show: () => {
          setImageStyle(prev => ({
            ...prev,
            display: 'block'
          }));
        },
        hide: () => {
          setImageStyle(prev => ({
            ...prev,
            display: 'none'
          }));
        },
        goToFront: () => {
          setImageStyle(prev => ({
            ...prev,
            zIndex: 9999
          }));
        },
        goForwardLayers: (layers) => {
          setImageStyle(prev => ({
            ...prev,
            zIndex: (prev.zIndex || 0) + layers
          }));
        },
        getCostumeNumber: () => context.currentCostume + 1,
        getBackdropNumber: () => context.currentBackdrop + 1,
        getSize: () => {
          const style = imageRef.current?.style.width || '100%';
          return parseFloat(style);
        },
  
        // Fonctions pour le contrôle (version améliorée avec async/await)
        wait: async (seconds) => {
          await new Promise(resolve => setTimeout(resolve, seconds * 1000));
        },
        repeat: async (times, callback) => {
          for (let i = 0; i < times; i++) {
            await callback();
          }
        },
        forever: async (callback) => {
          while (true) {
            await callback();
          }
        },
        if: async (condition, thenBlock) => {
          if (await condition()) {
            await thenBlock();
          }
        },
        ifElse: async (condition, thenBlock, elseBlock) => {
          if (await condition()) {
            await thenBlock();
          } else {
            await elseBlock();
          }
        },
        waitUntil: async (condition) => {
          while (!(await condition())) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        },
        repeatUntil: async (condition, callback) => {
          while (!(await condition())) {
            await callback();
          }
        },
        stopAll: () => {
          throw new Error('Scripts stopped');
        },
        createClone: () => {
          const clone = JSON.parse(JSON.stringify(context));
          context.clones.push(clone);
          return clone;
        },
        deleteClone: (clone) => {
          const index = context.clones.indexOf(clone);
          if (index >= 0) {
            context.clones.splice(index, 1);
          }
        },
  
        // Fonctions pour les moteurs
        goToRandomPosition: () => {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          setImageStyle(prev => ({
            ...prev,
            left: `${x}px`,
            top: `${y}px`
          }));
        },
        goToXY: (x, y) => {
          setImageStyle(prev => ({
            ...prev,
            left: `${x}px`,
            top: `${y}px`
          }));
        },
        glideToXY: async (seconds, x, y) => {
          const startX = parseFloat(imageRef.current?.style.left || '0');
          const startY = parseFloat(imageRef.current?.style.top || '0');
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = Math.min(elapsed / seconds, 1);
            
            const newX = startX + (x - startX) * progress;
            const newY = startY + (y - startY) * progress;
            
            setImageStyle(prev => ({
              ...prev,
              left: `${newX}px`,
              top: `${newY}px`
            }));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        },
        pointTowards: (target) => {
          const rect = imageRef.current?.getBoundingClientRect();
          if (!rect) return;
          
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          let targetX, targetY;
          
          if (target === 'MOUSE_POINTER') {
            targetX = context.mouseX;
            targetY = context.mouseY;
          } else {
            // Implémentez d'autres cibles si nécessaire
            return;
          }
          
          const dx = targetX - centerX;
          const dy = targetY - centerY;
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          
          setImageStyle(prev => ({
            ...prev,
            transform: `${prev.transform.replace(/rotate\([^)]*\)/, '')} rotate(${angle}deg)`.trim()
          }));
        },
        changeXBy: (dx) => {
          const currentX = parseFloat(imageRef.current?.style.left || '0');
          setImageStyle(prev => ({
            ...prev,
            left: `${currentX + dx}px`
          }));
        },
        setXTo: (x) => {
          setImageStyle(prev => ({
            ...prev,
            left: `${x}px`
          }));
        },
        changeYBy: (dy) => {
          const currentY = parseFloat(imageRef.current?.style.top || '0');
          setImageStyle(prev => ({
            ...prev,
            top: `${currentY + dy}px`
          }));
        },
        setYTo: (y) => {
          setImageStyle(prev => ({
            ...prev,
            top: `${y}px`
          }));
        },
        ifOnEdgeBounce: () => {
          const rect = imageRef.current?.getBoundingClientRect();
          if (!rect) return;
          
          if (rect.left < 0 || rect.right > window.innerWidth) {
            setImageStyle(prev => ({
              ...prev,
              transform: `${prev.transform} scaleX(${rect.left < 0 ? 1 : -1})`.trim()
            }));
          }
          
          if (rect.top < 0 || rect.bottom > window.innerHeight) {
            setImageStyle(prev => ({
              ...prev,
              transform: `${prev.transform} scaleY(${rect.top < 0 ? 1 : -1})`.trim()
            }));
          }
        },
        setRotationStyle: (style) => {
          context.rotationStyle = style;
        },
        getX: () => {
          return parseFloat(imageRef.current?.style.left || '0');
        },
        getY: () => {
          return parseFloat(imageRef.current?.style.top || '0');
        },
        getDirection: () => {
          const transform = imageRef.current?.style.transform || '';
          const match = transform.match(/rotate\(([-\d.]+)deg\)/);
          return match ? parseFloat(match[1]) : 0;
        },
  
        // Fonctions pour les événements
        broadcast: (message) => {
          // Implémentez la logique de diffusion si nécessaire
          console.log(`Broadcast: ${message}`);
        },
        broadcastAndWait: async (message) => {
          // Implémentez la logique de diffusion avec attente si nécessaire
          console.log(`Broadcast and wait: ${message}`);
          await new Promise(resolve => setTimeout(resolve, 100));
        },
  
        // Fonctions pour le son
        playSound: async (sound) => {
          console.log(`Playing sound: ${sound}`);
          // Implémentez la lecture audio si nécessaire
        },
        startSound: (sound) => {
          console.log(`Starting sound: ${sound}`);
          // Implémentez le démarrage audio si nécessaire
        },
        stopAllSounds: () => {
          console.log('Stopping all sounds');
          // Implémentez l'arrêt audio si nécessaire
        },
        changePitchEffect: (value) => {
          console.log(`Changing pitch by ${value}`);
        },
        setPitchEffect: (value) => {
          console.log(`Setting pitch to ${value}`);
        },
        clearSoundEffects: () => {
          console.log('Clearing sound effects');
        },
        changeVolumeBy: (delta) => {
          context.volume = Math.max(0, Math.min(100, context.volume + delta));
        },
        setVolumeTo: (volume) => {
          context.volume = Math.max(0, Math.min(100, volume));
        },
        getVolume: () => context.volume,
  
        // Console
        console: {
          log: console.log,
          warn: console.warn,
          error: console.error
        }
      };
  
      // Gestion des événements
      const updateMousePosition = (e) => {
        context.mouseX = e.clientX;
        context.mouseY = e.clientY;
      };
  
      const updateMouseDown = (e) => {
        context.mouseDown = e.type === 'mousedown';
      };
  
      const updateKeyPressed = (e) => {
        if (e.type === 'keydown') {
          context.keyPressed[e.key] = true;
        } else if (e.type === 'keyup') {
          context.keyPressed[e.key] = false;
        }
      };
  
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mousedown', updateMouseDown);
      window.addEventListener('mouseup', updateMouseDown);
      window.addEventListener('keydown', updateKeyPressed);
      window.addEventListener('keyup', updateKeyPressed);
  
      // Initialiser le timer
      context.resetTimer();
  
      // Exécuter le code généré
      const executeCode = new Function('context', `
        try {
          with(context) {
            ${code}
          }
        } catch (error) {
          context.console.error('Execution error:', error);
          throw error;
        }
      `);
      
      // Exécuter de manière asynchrone
      (async () => {
        try {
          await executeCode(context);
        } catch (error) {
          console.error('Error executing code:', error);
          alert(`Error executing code: ${error.message}`);
        }
      })();
  
      // Nettoyer les écouteurs d'événements
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('mousedown', updateMouseDown);
        window.removeEventListener('mouseup', updateMouseDown);
        window.removeEventListener('keydown', updateKeyPressed);
        window.removeEventListener('keyup', updateKeyPressed);
      };
  
    } catch (error) {
      console.error('Execution error:', error);
      alert(`Error executing code: ${error.message}`);
    }
  };
  const handleSaveCode = async () => {
    try {
      const response = await fetch('https://backendversion0.onrender.com/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: generatedCode }),
      });
  
      if (!response.ok) throw new Error('Failed to save code');
      const result = await response.json();
      console.log('Code saved successfully:', result);
      alert('Code saved successfully!');
    } catch (error) {
      console.error('Error saving code:', error);
      alert('Failed to save code. Please try again.');
    }
  };

  useEffect(() => {
    if (!blocklyDiv.current) return;

    try {
      const workspace = Blockly.inject(blocklyDiv.current, {
        toolbox: generateInitialToolbox(),
        scrollbars: true,
        trashcan: true,
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
        },
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true
        },
      });

      workspaceRef.current = workspace;
      setWorkspaceInitialized(true);

      workspace.addChangeListener(() => {
        try {
          const code = javascriptGenerator.workspaceToCode(workspace);
          setGeneratedCode(code);
        } catch (error) {
          console.error('Code generation error:', error);
        }
      });

      return () => {
        if (workspace) {
          workspace.dispose();
          workspaceRef.current = null;
          setWorkspaceInitialized(false);
        }
      };
    } catch (error) {
      console.error('Workspace initialization error:', error);
    }
  }, []);

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageStyle({
          display: 'block',
          transform: 'none',
          width: '100%'
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.appContainer}>
      <h2>Blockly Playground</h2>
      
      <div className={styles.mainContent}>
        <div className={styles.workspaceArea}>
          <div className={styles.actionButtons}>
            <button onClick={handleRunCode} disabled={!workspaceInitialized}>
              <img src={run} alt="Run" className={styles.buttonIcon} />
              Run
            </button>
            <button onClick={handleSaveCode} disabled={!generatedCode}>
              <img src={save} alt="Save" className={styles.buttonIcon} />
              Save
            </button>
            <button onClick={triggerFileInput}>
              <img src={addPhotoIcon} alt="Add Photo" className={styles.buttonIcon} />
              Add Image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
          
          <div className={styles.workspaceWithImage}>
            <div ref={blocklyDiv} className={styles.blocklyWorkspace}></div>
            {imagePreview && (
              <div className={styles.imagePreviewContainer}>
                <img 
                  ref={imageRef}
                  src={imagePreview} 
                  alt="Uploaded preview" 
                  className={styles.uploadedImage}
                  style={{
                    ...imageStyle,
                    display: imageStyle.display || 'block'
                  }}
                />
              </div>
            )}
          </div>
          
          <div className={styles.generatedCode}>
            <h3>Generated Code:</h3>
            <textarea
              value={generatedCode}
              readOnly
              className={styles.codeOutput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocklyComponent;