import bcrypt from "bcrypt";

import { Role } from "../../models/Role";
import { User } from "../../models/User";
import { AppDataSource } from "../db";
import { Service } from "../../models/Service";
import { Appoinment } from "../../models/Appoinment";

const roleSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const roleUser = new Role();
    roleUser.id = 1;
    roleUser.name = "user"
    await roleUser.save();

    const roleAdmin = new Role();
    roleAdmin.id = 2;
    roleAdmin.name = "admin"
    await roleAdmin.save();

    const roleSuperAdmin = new Role();
    roleSuperAdmin.id = 3;
    roleSuperAdmin.name = "super_admin"
    await roleSuperAdmin.save();

    console.log('---------------------------------------');
    console.log('Los roles se han guardado correctamente');
    console.log('---------------------------------------');
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy()
  }
}

const userSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const user = new User();
    user.first_name = "user"
    user.email = "user@user.com"

    user.role = new Role();
    user.role.id = 1

    user.password = bcrypt.hashSync("123456", 6)
    await user.save();

    const userAdmin = new User();
    userAdmin.first_name = "admin"
    userAdmin.email = "admin@admin.com"

    userAdmin.role = new Role();
    userAdmin.role.id = 2

    userAdmin.password = bcrypt.hashSync("123456", 6)
    await userAdmin.save();

    const userSuperAdmin = new User();
    userSuperAdmin.first_name = "superadmin"
    userSuperAdmin.email = "superadmin@superadmin.com"
    userSuperAdmin.role = new Role();
    userSuperAdmin.role.id = 3
    userSuperAdmin.password = bcrypt.hashSync("123456", 6)
    await userSuperAdmin.save();

    const paola = new User();
    paola.first_name = "paola"
    paola.email = "paola@paola.com"

    paola.role = new Role();
    paola.role.id = 1

    paola.password = bcrypt.hashSync("123456", 6)
    await paola.save();

    const sofia = new User();
    sofia.first_name = "sofia"
    sofia.email = "sofia@sofia.com"

    sofia.role = new Role();
    sofia.role.id = 1

    sofia.password = bcrypt.hashSync("123456", 6)
    await sofia.save();

    const toni = new User();
    toni.first_name = "toni"
    toni.email = "toni@toni.com"

    toni.role = new Role();
    toni.role.id = 1

    toni.password = bcrypt.hashSync("123456", 6) // princess
    await toni.save();

    console.log('------------------------------------------');
    console.log('Los usuarios se han guardado correctamente');
    console.log('------------------------------------------');

  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy()
  }
}

const serviceSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const service1 = new Service();
    service1.serviceName = "Tatuajes"
    service1.description = "Realizamos todo tipo de tatuajes, puedes elegir de nuestro cátalogo o te diseñamos lo que desees."
    service1.urlImg= "https://nirmedia.com/wp-content/uploads/2022/07/tatuador.jpg"
    await service1.save()

    const service2 = new Service();
    service2.serviceName = "Restauración de tatuajes"
    service2.description = "En la restauración de tatuajes se puede retocar el tattoo, colocando más tinta, devolviéndole la intensidad al color, resaltando los tonos y su brillo."
    service2.urlImg= "https://cadenaser.com/resizer/Ixs5tF0u1lD50NYpKWhxUGER9Ac=/650x488/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/W34HIPJXHJCGBB7ZEBH5ONGSIA.jpg"
    await service2.save()

    const service3 = new Service();
    service3.serviceName = "Tapado de tatto"
    service3.description = "Si tienes cicatrices de operaciones, estrías, quemaduras o manchas en tu piel que quieras minimizar a la vista, realizamos bellos tatuajes con el estilo de tu preferencia, que oculten esa zona y decoren artísticamente tu cuerpo."
    service3.urlImg= "https://elpais.com/elpais/2017/05/12/album/1494576279_555839.html"
    await service3.save()

    const service4 = new Service();
    service4.serviceName = "Piercings"
    service4.description = "Ofrecemos servicios profesionales para la colocación de piercings y dilatadores."
    service4.urlImg= "https://www.thesun.co.uk/wp-content/uploads/2023/01/newspress-collage-21125861-1674385652453.jpg?w=620"
    await service4.save()

    const service5 = new Service();
    service5.serviceName = "Laser Tatoo"
    service5.description = "Ofrecemos la última tecnología de ZIMMER AESTHETICS, BISON MEDICAL y QUANTA SYSTEM en eliminación de tatuajes láser."
    service5.urlImg = "https://theobjective.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-13-at-10.46.42.jpg"
    await service5.save()

    console.log('------------------------------------------');
    console.log('Los servicios se han guardado correctamente');
    console.log('------------------------------------------');

  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy()
  }
}


const appointmentsSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const appointment1 = new Appoinment();
    appointment1.user = new User()
    appointment1.user.id = 4;
    appointment1.service = new Service()
    appointment1.service.id = 1
    appointment1.appointmentDate = new Date("2024-04-03");
    await appointment1.save()

    const appointment2 = new Appoinment();
    appointment2.user = new User()
    appointment2.user.id = 4;
    appointment2.service = new Service()
    appointment2.service.id = 2
    appointment2.appointmentDate = new Date("2024-05-03");
    await appointment2.save()

    const appointment3 = new Appoinment();
    appointment3.user = new User()
    appointment3.user.id = 5;
    appointment3.service = new Service()
    appointment3.service.id = 4
    appointment3.appointmentDate = new Date("2024-03-28");
    await appointment3.save()

    const appointment4 = new Appoinment();
    appointment4.user = new User()
    appointment4.user.id = 6;
    appointment4.service = new Service()
    appointment4.service.id = 3
    appointment4.appointmentDate = new Date("2024-03-18");
    await appointment4.save()

    const appointment5 = new Appoinment();
    appointment5.user = new User()
    appointment5.user.id = 4;
    appointment5.service = new Service()
    appointment5.service.id = 5
    appointment5.appointmentDate = new Date("2024-05-03");
    await appointment5.save()

    const appointment6 = new Appoinment();
    appointment6.user = new User()
    appointment6.user.id = 5;
    appointment6.service = new Service()
    appointment6.service.id = 4
    appointment6.appointmentDate = new Date("2024-10-04");
    await appointment6.save()

    const appointment7 = new Appoinment();
    appointment7.user = new User()
    appointment7.user.id = 6;
    appointment7.service = new Service()
    appointment7.service.id = 2
    appointment7.appointmentDate = new Date("2024-05-14");
    await appointment7.save()

    const appointment8 = new Appoinment();
    appointment8.user = new User()
    appointment8.user.id = 6;
    appointment8.service = new Service()
    appointment8.service.id = 3
    appointment8.appointmentDate = new Date("2024-05-04");
    await appointment8.save()

    const appointment9 = new Appoinment();
    appointment9.user = new User()
    appointment9.user.id = 5;
    appointment9.service = new Service()
    appointment9.service.id = 1
    appointment9.appointmentDate = new Date("2024-10-04");
    await appointment9.save()

    const appointment10 = new Appoinment();
    appointment10.user = new User()
    appointment10.user.id = 5;
    appointment10.service = new Service()
    appointment10.service.id = 2
    appointment10.appointmentDate = new Date("2024-04-04");
    await appointment10.save()

    const appointment11 = new Appoinment();
    appointment11.user = new User()
    appointment11.user.id = 4;
    appointment11.service = new Service()
    appointment11.service.id = 3
    appointment11.appointmentDate = new Date("2024-06-02");
    await appointment11.save()

    const appointment12 = new Appoinment();
    appointment12.user = new User()
    appointment12.user.id = 5;
    appointment12.service = new Service()
    appointment12.service.id = 2
    appointment12.appointmentDate = new Date("2024-05-05");
    await appointment12.save()

    const appointment13 = new Appoinment();
    appointment13.user = new User()
    appointment13.user.id = 6;
    appointment13.service = new Service()
    appointment13.service.id = 4
    appointment13.appointmentDate = new Date("2024-11-04");
    await appointment13.save()

    const appointment14 = new Appoinment();
    appointment14.user = new User()
    appointment14.user.id = 5;
    appointment14.service = new Service()
    appointment14.service.id = 3
    appointment14.appointmentDate = new Date("2024-12-04");
    await appointment14.save()

    const appointment15 = new Appoinment();
    appointment15.user = new User()
    appointment15.user.id = 6;
    appointment15.service = new Service()
    appointment15.service.id = 2
    appointment15.appointmentDate = new Date("2024-09-21");
    await appointment15.save()

    console.log('------------------------------------------');
    console.log('Las citas se han guardado correctamente');
    console.log('------------------------------------------');

  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy()
  }
}

const launchSeeder = async () => {
  await roleSeedDatabase();
  await userSeedDatabase();
  await serviceSeedDatabase()
  await appointmentsSeedDatabase()
}

launchSeeder();