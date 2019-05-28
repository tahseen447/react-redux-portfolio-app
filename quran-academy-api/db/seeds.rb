# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Teacher.create(name: "Sheikh Anas", gender:"M", image:"", bio:"He is the Imam and Principal of Quran Academy")
Teacher.create(name: "Ms. Buhsra", gender:"F", image:"", bio:"She is the first lady of the Masjid and also a French Teacher")
Teacher.create(name: "Sheikh Ahmed", gender:"M", image:"", bio:"He is the Vice Imam and Vice Principal of Quran Academy")

Student.create(name:"Maryam Siddiqui", age:4, image:"", gender:"F", lesson:"damma", teacher_id:1)
Student.create(name:"Ali Siddiqui", age:2, image:"", gender:"M", lesson:"letter ba", teacher_id:2)
Student.create(name:"Ibrahim Saadi", age:6, image:"", gender:"M", lesson:"tanween", teacher_id:3)
Student.create(name:"Ilyas Saadi", age:4, image:"", gender:"M", lesson:"4:32", teacher_id:1)
Student.create(name:"Mariyum Shah", age:6, image:"", gender:"F", lesson:"6:60", teacher_id:2)
Student.create(name:"Radia Fatima", age:9, image:"", gender:"F", lesson:"33:89", teacher_id:3)
Student.create(name:"Abdul Wahab", age:10, image:"", gender:"M", lesson:"62:11", teacher_id:1)
Student.create(name:"Abdullah Raouf", age:11, image:"", gender:"M", lesson:"90:3", teacher_id:2)
Student.create(name:"Imaan Raouf", age:4, image:"", gender:"F", lesson:"44:12", teacher_id:3)
Student.create(name:"Asma Khan", age:9, image:"", gender:"F", lesson:"6:20", teacher_id:1)
