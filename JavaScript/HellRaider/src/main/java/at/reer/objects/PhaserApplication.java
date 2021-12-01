package at.reer.objects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "at.htld.module")
public class PhaserApplication {

    public static void main(final String[] args) {
        SpringApplication.run(PhaserApplication.class, args);
    }

}

