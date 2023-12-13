import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import ArchiveItens from './pages/ArchiveItens'
import { Ionicons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
            name="Principal" 
            component={Home} 
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <Ionicons name="home" color={color} size={size} />
                    }
                    return <Ionicons name="home-outline" color={color} size={size} />
                }
            }} />
            <Tabs.Screen 
            name="Senhas Salvas"
            component={ArchiveItens}
            options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                        return <Ionicons name="lock-closed" color={color} size={size} />
                    }
                    return <Ionicons name="lock-closed-outline" color={color} size={size} />
                }
            }} />
        </Tabs.Navigator>
    )
}