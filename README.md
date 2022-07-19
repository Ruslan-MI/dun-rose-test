# Тестовое задание

### Язык: PHP

1. Разработать приложение, имитирующее иерархию (3 уровня иерархии) домашней мебели. В коде должны присутствовать абстрактные классы. Классы должны иметь набор произвольных методов, но обязательно должен присутствовать метод сохранения экземпляра класса в БД.

2. Дан массив «шаблонов». Каждый шаблон имеет следующие параметры: 
"Id" — уникальный числовой идентификатор шаблона
"ParentId" — идентификатор родительского шаблона, если таковой имеется, иначе 0
"Attribute" — атрибут (часть текста) родительского шаблона, которая должна быть заменена на текст данного шаблона
"Text" — текст данного шаблона.
Необходимо написать рекурсивную функцию getTemplate($id), которая по идентификатору шаблона возвращает итоговый шаблон, полученный последовательным «вложением» дочерних шаблонов в родительские, т.е. заменой атрибута родительского шаблона на текст дочернего.
Пример массива шаблонов:
```
$templates=array(
   array("Id"=>1,"ParentId"=>0,"Attribute"=>"","Text"=>"Корневой шаблон / <%TITLE%>"),
   array("Id"=>2,"ParentId"=>1,"Attribute"=>"<%TITLE%>","Text"=>"Первый подшаблон<br/><%CONTENT%>"),
   array("Id"=>3,"ParentId"=>1,"Attribute"=>"<%TITLE%>","Text"=>"Второй подшаблон<br/><%CONTENT%>"),
   array("Id"=>4,"ParentId"=>2,"Attribute"=>"<%CONTENT%>","Text"=>"<b>Шаблон 4</b>"),
   array("Id"=>5,"ParentId"=>3,"Attribute"=>"<%CONTENT%>","Text"=>"<b>Шаблон 5</b>"),
   array("Id"=>6,"ParentId"=>2,"Attribute"=>"<%CONTENT%>","Text"=>"<b>Шаблон 6</b>"),
   array("Id"=>7,"ParentId"=>0,"Attribute"=>"","Text"=>"Корневой шаблон №2")
)
```


### Язык: JS

1. Создать класс имеющий 1 входной параметр, который инициализирует поле id. В классе должен быть реализован метод, который возвращает квадрат поля id.

2. Создать массив объектов класса описанных в пункте 1 и произвольно проинициализировать их. В цикле от 0 до кол-ва элементов в массиве вывести квадраты значений элементов в массиве.