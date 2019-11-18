package au.superdraftfantasy.api

import spock.lang.Specification

class HelloSpec extends Specification {
    def "should say Hello"(){
        given:
        def number = 5;

        expect:
        number == 5;
    }
}
